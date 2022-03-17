from fastapi import APIRouter, FastAPI

from backend.routes.bookmark import router as bookmark_router
from backend.routes.contents import router as contents_router
from backend.routes.folders import router as startpage_router
from backend.routes.sign import router as sign_router
from starlette.middleware.cors import CORSMiddleware

router = APIRouter()
router.include_router(sign_router)
router.include_router(startpage_router)
router.include_router(bookmark_router)
router.include_router(contents_router)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,   # 追記により追加
    allow_methods=["*"],      # 追記により追加
    allow_headers=["*"]       # 追記により追加
)
app.include_router(router)
