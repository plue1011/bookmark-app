from typing import List
from uuid import UUID

from pydantic import BaseModel, Field


class Folder(BaseModel):
    id: UUID = Field(description="Folderのid")
    title: str = Field(description="Folderのtitle")


class FolderList(BaseModel):
    folder_list: List[Folder] = Field(description="Folderのリスト")
