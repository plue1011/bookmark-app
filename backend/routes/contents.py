import random
import uuid
from uuid import UUID

from fastapi import APIRouter

from backend.models.schemas.contents import Content, ContentInfo, Contents

router = APIRouter()


@router.get("/contents/{folder_id}")
def display_contents(folder_id: UUID) -> Contents:
    # folder_idに該当するをデータを取得してくる
    folder_id
    content_info = ContentInfo(
        url="https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/",
        image="https://kotsukotsu.work/media/kotsu2to-icon.png",
        description="ウェブサイトのOGP 情報を取得する Serverless Functions を作成してみたので紹介します。",
        title="[Vercel] ウェブサイトのOGP情報を取得する Serverless Functions を作成する",
        comment="説明文",
    )
    nodes = [uuid.uuid4() for _ in range(5)]
    if random.randint(0, 2) == 1:
        type = "tree"
        contents = [
            Content(
                type=type,
                id=nodes[0],
                info=content_info,
                children=[
                    Content(
                        id=nodes[1],
                        info=content_info,
                        children=[
                            Content(id=nodes[3], info=content_info, children=[]),
                            Content(id=nodes[4], info=content_info, children=[]),
                        ],
                    ),
                    Content(id=nodes[2], info=content_info, children=[]),
                ],
            )
        ]

        return Contents(type=type, contents=contents)
    else:
        type = "set"
        contents = [
            Content(id=nodes[0], info=content_info),
            Content(id=nodes[1], info=content_info),
            Content(id=nodes[2], info=content_info),
            Content(id=nodes[3], info=content_info),
            Content(id=nodes[4], info=content_info),
        ]

        return Contents(type=type, contents=contents)
