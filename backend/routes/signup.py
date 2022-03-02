from fastapi import APIRouter

from backend.models.schemas.status import Status

router = APIRouter()


@router.post("/signup")
def signup(name: str, password: str) -> Status:
    names = ["yutaka", "masao", "baba"]
    if name in names:
        status = False
    else:
        status = True
        # databaseに登録
        password

    return Status(**{"status": status})


@router.post("/signin")
def signin(name: str, password: str) -> Status:
    ## databaseに接続
    signs = {"yutaka": "chiaki", "baba": "void", "masao": "hogara"}
    if signs[name] == password:
        status = True
    else:
        status = False

    return Status(**{"status": status})
