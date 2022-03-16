import re
import uuid
from string import Template
from typing import Optional

import requests
from fastapi import APIRouter

from backend.models.schemas.bookmark import OGP, BookMark

router = APIRouter()


def get_ogp(url: str) -> Optional[OGP]:
    response = requests.get(url)

    if response.status_code != 200:
        return None

    html: str = response.text

    template = Template('<meta property="og:${og}" content="(.*?)"')
    _image_url = re.search(template.substitute(og="image"), html, flags=re.DOTALL)
    if _image_url:
        image_url = _image_url.group(1)

    _title = re.search(template.substitute(og="title"), html, flags=re.DOTALL)
    if _title:
        title = _title.group(1)

    _description = re.search(template.substitute(og="description"), html, flags=re.DOTALL)
    if _description:
        description = _description.group(1)

    return OGP(title=title, image_url=image_url, description=description)


@router.post("/bookmark")
def bookmark(url: str) -> BookMark:
    bookmark = {"url": url}
    # databaseを検索し、存在しなければogpを抽出してくる
    if True:
        if ogp := get_ogp(url):
            bookmark.update(ogp.dict())
    bookmark["id"] = uuid.uuid4()
    return BookMark(**bookmark)
