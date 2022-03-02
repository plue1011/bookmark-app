from pydantic import BaseModel, Field


class Status(BaseModel):
    status: bool = Field(description="signupが成功したか否か")
