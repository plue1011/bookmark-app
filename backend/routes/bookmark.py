import uuid

from fastapi import APIRouter

from backend.models.schemas.bookmark import BookMark

router = APIRouter()


@router.post("/bookmark")
def bookmark(url: str) -> BookMark:
    status = True
    return BookMark(**{"status": status, "id": uuid.uuid4(), "url": url})
