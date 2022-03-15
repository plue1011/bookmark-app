import random
import uuid
from uuid import UUID

from backend.models.schemas.folders import Folder, FolderList
from fastapi import APIRouter

router = APIRouter()


@router.get("/folders/{user_id}")
def signup(user_id: UUID) -> FolderList:
    # user_idに該当するfoldersを取得してくる
    user_id
    folder_list = [
        Folder(**{"id": uuid.uuid4(), "title": f"title:{random.randint(0, 100)}"})
        for _ in range(10)
    ]
    return FolderList(**{"folder_list": folder_list})
