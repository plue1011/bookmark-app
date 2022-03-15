from uuid import UUID

from pydantic import BaseModel, Field


class BookMark(BaseModel):
    status: bool = Field(description="登録が成功したか")
    id: UUID = Field(description="URLのid")
    url: str = Field(description="URL")
