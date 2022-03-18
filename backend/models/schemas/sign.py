from typing import Optional
from uuid import UUID

from pydantic import BaseModel, Field


class SignUp(BaseModel):
    status: bool = Field(description="signupが成功したか否か")


class SignUpInput(BaseModel):
    name: str = Field(description="signupの名前")
    password: str = Field(description="signupのパスワード")


class SignIn(BaseModel):
    status: bool = Field(description="signinが成功したか否か")
    user_id: Optional[UUID] = Field(description="user_id")
