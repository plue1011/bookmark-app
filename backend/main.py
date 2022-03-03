from fastapi import APIRouter, FastAPI

from backend.routes.folders import router as startpage_router
from backend.routes.sign import router as sign_router

router = APIRouter()
router.include_router(sign_router)
router.include_router(startpage_router)

app = FastAPI()
app.include_router(router)
