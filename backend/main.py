from fastapi import APIRouter, FastAPI

from backend.routes.signup import router as signup_router
from starlette.middleware.cors import CORSMiddleware # 追加

router = APIRouter()
router.include_router(signup_router)

app = FastAPI()

# CORSを回避するために追加（今回の肝）(Yuta)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)

app.include_router(router)
