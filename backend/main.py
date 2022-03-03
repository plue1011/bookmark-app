from fastapi import APIRouter, FastAPI

from backend.routes.signup import router as signup_router

router = APIRouter()
router.include_router(signup_router)

app = FastAPI()
app.include_router(router)
