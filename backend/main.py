from fastapi import APIRouter, FastAPI
from starlette.middleware.cors import CORSMiddleware

from backend.routes.bookmark import router as bookmark_router
from backend.routes.contents import router as contents_router
from backend.routes.folders import router as startpage_router
from backend.routes.sign import router as sign_router

router = APIRouter()
router.include_router(sign_router)
router.include_router(startpage_router)
router.include_router(bookmark_router)
router.include_router(contents_router)

app = FastAPI()
app.include_router(router)

app.add_middleware(
    CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"]
)
