"""Email Ingestion Adapter for DocuClaw.

Fetches emails via IMAP/POP3, extracts attachments and body text,
and prepares them for the parsing pipeline.
"""

from __future__ import annotations

import email
import imaplib
import logging
import poplib
from collections.abc import Generator
from email.message import Message
from pathlib import Path

logger = logging.getLogger(__name__)


class EmailIngestionAdapter:
    """Adapter to fetch emails via IMAP or POP3 and extract their contents."""

    def __init__(
        self,
        host: str,
        username: str,
        password: str,
        protocol: str = "IMAP",
        port: int | None = None,
        use_ssl: bool = True,
        mailbox: str = "INBOX",
    ) -> None:
        """Initialize the email adapter configuration.

        Parameters
        ----------
        host : str
            Mail server host (e.g., imap.gmail.com).
        username : str
            Email account username.
        password : str
            Email account password or app-specific password.
        protocol : str
            Protocol to use ('IMAP' or 'POP3'). Defaults to 'IMAP'.
        port : int | None
            Port to connect to. If None, defaults based on protocol and SSL.
        use_ssl : bool
            Whether to use SSL/TLS connection. Defaults to True.
        mailbox : str
            Mailbox folder to fetch from (IMAP only). Defaults to 'INBOX'.
        """
        self.host = host
        self.username = username
        self.password = password
        self.protocol = protocol.upper()
        self.use_ssl = use_ssl
        self.mailbox = mailbox

        if port is None:
            if self.protocol == "IMAP":
                self.port = 993 if use_ssl else 143
            elif self.protocol == "POP3":
                self.port = 995 if use_ssl else 110
            else:
                raise ValueError(f"Unsupported protocol: {self.protocol}")
        else:
            self.port = port

    def fetch_unread_emails(self) -> Generator[Message, None, None]:
        """Fetch unread emails (or all for POP3) using the configured protocol."""
        if self.protocol == "IMAP":
            yield from self._fetch_imap()
        elif self.protocol == "POP3":
            yield from self._fetch_pop3()
        else:
            raise ValueError(f"Unsupported protocol: {self.protocol}")

    def _fetch_imap(self) -> Generator[Message, None, None]:
        try:
            mail: imaplib.IMAP4 | imaplib.IMAP4_SSL
            if self.use_ssl:
                mail = imaplib.IMAP4_SSL(self.host, self.port)
            else:
                mail = imaplib.IMAP4(self.host, self.port)

            mail.login(self.username, self.password)
            mail.select(self.mailbox)

            _, data = mail.search(None, "UNSEEN")
            if not data[0]:
                logger.info("No unread emails found via IMAP.")
                return

            email_ids = data[0].split()
            for e_id in email_ids:
                _, msg_data = mail.fetch(e_id, "(RFC822)")
                for response_part in msg_data:
                    if isinstance(response_part, tuple):
                        msg = email.message_from_bytes(response_part[1])
                        yield msg

            mail.close()
            mail.logout()
        except Exception as e:
            logger.error(f"Failed to fetch IMAP emails: {e}")
            raise

    def _fetch_pop3(self) -> Generator[Message, None, None]:
        try:
            mail: poplib.POP3 | poplib.POP3_SSL
            if self.use_ssl:
                mail = poplib.POP3_SSL(self.host, self.port)
            else:
                mail = poplib.POP3(self.host, self.port)

            mail.user(self.username)
            mail.pass_(self.password)

            num_messages = len(mail.list()[1])
            for i in range(1, num_messages + 1):
                _, lines, _ = mail.retr(i)
                raw_email = b"\\n".join(lines)
                msg = email.message_from_bytes(raw_email)
                yield msg

            mail.quit()
        except Exception as e:
            logger.error(f"Failed to fetch POP3 emails: {e}")
            raise

    def extract_attachments(self, msg: Message, output_dir: Path | str) -> list[Path]:
        """Extract attachments from the message and save to the output directory.

        Returns a list of Paths to the saved attachments.
        """
        extracted_files: list[Path] = []
        out_dir = Path(output_dir)
        out_dir.mkdir(parents=True, exist_ok=True)

        for part in msg.walk():
            if part.get_content_maintype() == "multipart":
                continue
            if part.get("Content-Disposition") is None:
                continue

            filename = part.get_filename()
            if not filename:
                continue

            file_path = out_dir / filename
            output_data = part.get_payload(decode=True)
            if output_data is not None:
                with open(file_path, "wb") as f:
                    f.write(output_data)  # type: ignore
                extracted_files.append(file_path)

        return extracted_files

    def extract_body_text(self, msg: Message) -> str:
        """Extract the plain text body of the email, if available."""
        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                content_type = part.get_content_type()
                content_disposition = str(part.get("Content-Disposition"))

                if content_type == "text/plain" and "attachment" not in content_disposition:
                    payload = part.get_payload(decode=True)
                    if payload and isinstance(payload, bytes):
                        body += payload.decode(errors="ignore") + "\\n"
        else:
            payload = msg.get_payload(decode=True)
            if payload and isinstance(payload, bytes):
                body = payload.decode(errors="ignore")

        return body.strip()
