from pydantic import BaseModel, Field


class Status(BaseModel):
    status: bool = Field(description="signup,signinが成功したか否か")
