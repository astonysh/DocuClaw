from datetime import date

from docuclaw.schema import DocuClawDocument, DocumentType, EntityType, SourceType


def test_document_schema_validation():
    """Test that our core data contract validates correctly."""
    doc = DocuClawDocument(
        entity_id="test_org",
        entity_type=EntityType.COMPANY,
        source_type=SourceType.PHYSICAL_MAIL,
        country="DE",
        document_type=DocumentType.INVOICE,
        date_received=date.today(),
        sender_name="Test Sender",
        amount_total=100.0,
        currency="EUR",
    )
    assert doc.entity_id == "test_org"
    assert doc.currency == "EUR"
    assert doc.id.startswith("doc_")


def test_id_generation_is_safe():
    """Verify document ID format."""
    doc1 = DocuClawDocument(
        entity_id="e1",
        entity_type=EntityType.PERSONAL,
        source_type=SourceType.MANUAL,
        country="US",
        document_type=DocumentType.OTHER,
        date_received=date.today(),
        sender_name="S1",
    )
    doc2 = DocuClawDocument(
        entity_id="e1",
        entity_type=EntityType.PERSONAL,
        source_type=SourceType.MANUAL,
        country="US",
        document_type=DocumentType.OTHER,
        date_received=date.today(),
        sender_name="S1",
    )
    assert doc1.id != doc2.id
    assert len(doc1.id) > 15
