import uuid

from fastapi import APIRouter

from ..models.schemas.sign import Sign, SignIn, SignUp

router = APIRouter()


@router.post("/signup")
def signup(sign: Sign) -> SignUp:
    names = ["yutaka", "masao", "baba"]
    if sign.name in names:
        status = False
    else:
        status = True
        # databaseに登録
        sign.password

    return SignUp(**{"status": status})


@router.post("/signin")
def signin(sign: Sign) -> SignIn:
    # databaseに接続
    signs = {"yutaka": "chiaki", "baba": "void", "masao": "hogara"}
    uuids = {"yutaka": uuid.uuid4(), "baba": uuid.uuid4(), "masao": uuid.uuid4()}
    if signs[sign.name] == sign.password:
        status = True
    else:
        status = False

    return SignIn(**{"status": status, "user_id": uuids.get(sign.name, None)})
