"""Multimodal LLM Integration for DocuClaw.

Provides classes to interact with Ollama and OpenAI for multimodal data extraction.
"""

from __future__ import annotations

import base64
import json
import logging
import os
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)


class LLMError(Exception):
    """Raised when an LLM fails to process the request."""


class MultimodalExtractor(ABC):
    """Abstract base class for multimodal LLM extractors."""

    @abstractmethod
    def extract_structured_data(self, file_path: Path, prompt: str) -> dict[str, Any]:
        """Extract structured JSON data from an image/document using an LLM.

        Parameters
        ----------
        file_path : Path
            Path to the document/image file.
        prompt : str
            The system prompt detailing the JSON structure needed.

        Returns
        -------
        dict[str, Any]
            The parsed JSON response from the LLM.
        """
        ...


class OllamaExtractor(MultimodalExtractor):
    """Extractor using local Ollama models (e.g., llava)."""

    def __init__(self, model: str = "llava"):
        self.model = model
        try:
            import ollama
            self.client = ollama
        except ImportError as e:
            raise ImportError("Please install ollama package: pip install ollama") from e

    def extract_structured_data(self, file_path: Path, prompt: str) -> dict[str, Any]:
        try:
            with open(file_path, "rb") as f:
                image_bytes = f.read()

            response = self.client.generate(
                model=self.model,
                prompt=prompt,
                images=[image_bytes],
                format="json",
            )

            return json.loads(response["response"])  # type: ignore
        except Exception as e:
            logger.error(f"Ollama extraction failed: {e}")
            raise LLMError(f"Ollama extraction failed: {e}") from e


class OpenAIExtractor(MultimodalExtractor):
    """Extractor using OpenAI Vision models (e.g., gpt-4o)."""

    def __init__(self, model: str = "gpt-4o", api_key: str | None = None):
        self.model = model
        try:
            from openai import OpenAI
            self.client = OpenAI(api_key=api_key or os.getenv("OPENAI_API_KEY"))
        except ImportError as e:
            raise ImportError("Please install openai package: pip install openai") from e

    def extract_structured_data(self, file_path: Path, prompt: str) -> dict[str, Any]:
        try:
            with open(file_path, "rb") as f:
                base64_image = base64.b64encode(f.read()).decode("utf-8")

            # Determine mime type naively
            ext = file_path.suffix.lower()
            if ext in [".png"]:
                mime = "image/png"
            elif ext in [".jpg", ".jpeg"]:
                mime = "image/jpeg"
            else:
                mime = "application/pdf" # Simplified for demo

            response = self.client.chat.completions.create(
                model=self.model,
                response_format={"type": "json_object"},
                messages=[
                    {
                        "role": "system",
                        "content": prompt,
                    },
                    {
                        "role": "user",
                        "content": [
                            {"type": "text", "text": "Extract all relevant fields from this document into JSON format matching the instructions."},
                            {
                                "type": "image_url",
                                "image_url": {"url": f"data:{mime};base64,{base64_image}"},
                            },
                        ],
                    }
                ],
            )

            content = response.choices[0].message.content
            if content is None:
                raise ValueError("OpenAI returned empty content.")
            return json.loads(content)  # type: ignore
        except Exception as e:
            logger.error(f"OpenAI extraction failed: {e}")
            raise LLMError(f"OpenAI extraction failed: {e}") from e
