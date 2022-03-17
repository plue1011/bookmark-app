from typing import Optional
from uuid import UUID

from pydantic import BaseModel, Field


class OGP(BaseModel):
    title: Optional[str] = Field(description="メタタグのog:titleから抽出できるもの")
    image_url: Optional[str] = Field(description="メタタグのog:imageから抽出できるもの")
    description: Optional[str] = Field(description="メタタグのog:descriptionから抽出できるもの")


class BookMark(BaseModel):
    id: UUID = Field(description="URLのid")
    url: str = Field(description="URL")
    title: Optional[str] = Field(description="メタタグのog:titleから抽出できるもの")
    image_url: Optional[str] = Field(description="メタタグのog:imageから抽出できるもの")
    description: Optional[str] = Field(description="メタタグのog:descriptionから抽出できるもの")
