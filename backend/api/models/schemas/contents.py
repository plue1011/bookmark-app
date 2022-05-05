from __future__ import annotations

from typing import List, Literal, Optional
from uuid import UUID

from pydantic import BaseModel, Field


class ContentInfo(BaseModel):
    url: str = Field(description="URL")
    image: Optional[str] = Field(description="イメージ画像のsrc")
    description: Optional[str] = Field(description="自動で付与される説明文")
    title: Optional[str] = Field(description="ページタイトル")
    comment: Optional[str] = Field(description="ユーザがつけるコメント")


class Content(BaseModel):
    id: UUID = Field(description="Contentのid")
    info: ContentInfo = Field(description="Contentの情報")
    children: Optional[List[Optional[Content]]] = Field(description="子ノードのリスト(リストの順番は木の左からの順番)")


class Contents(BaseModel):
    type: Literal["tree", "set"] = Field(description="folderの種類")
    contents: List[Content] = Field(description="Contentのリスト")
