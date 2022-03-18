import uuid

from fastapi import APIRouter

from backend.models.schemas.sign import SignIn, SignUp, SignUpInput

router = APIRouter()


@router.post("/signup")
def signup(sign_up_input: SignUpInput) -> SignUp:
    names = ["yutaka", "masao", "baba"]
    if sign_up_input.name in names:
        status = False
    else:
        status = True
        # databaseに登録
        sign_up_input.password

    return SignUp(**{"status": status})


@router.post("/signin")
def signin(name: str, password: str) -> SignIn:
    # databaseに接続
    signs = {"yutaka": "chiaki", "baba": "void", "masao": "hogara"}
    uuids = {"yutaka": uuid.uuid4(), "baba": uuid.uuid4(), "masao": uuid.uuid4()}
    if signs[name] == password:
        status = True
    else:
        status = False

    return SignIn(**{"status": status, "user_id": uuids.get(name, None)})
