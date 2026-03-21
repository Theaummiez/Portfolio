from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional, List
from datetime import datetime


class ProjectBase(BaseModel):
    title: str
    description: str
    long_description: Optional[str] = None
    tech_stack: List[str] = []
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    stars: int = 0
    category: str = "Full-Stack"
    featured: bool = False
    order: int = 0


class ProjectCreate(ProjectBase):
    pass


class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    long_description: Optional[str] = None
    tech_stack: Optional[List[str]] = None
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    stars: Optional[int] = None
    category: Optional[str] = None
    featured: Optional[bool] = None
    order: Optional[int] = None


class ProjectOut(ProjectBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class SkillBase(BaseModel):
    name: str
    category: str
    level: int
    icon: Optional[str] = None
    color: Optional[str] = None
    order: int = 0

    @field_validator('level')
    @classmethod
    def validate_level(cls, v: int) -> int:
        if not 0 <= v <= 100:
            raise ValueError('Level must be between 0 and 100')
        return v


class SkillCreate(SkillBase):
    pass


class SkillOut(SkillBase):
    id: int

    class Config:
        from_attributes = True


class ContactMessageCreate(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

    @field_validator('name')
    @classmethod
    def validate_name(cls, v: str) -> str:
        if len(v.strip()) < 2:
            raise ValueError('Name must be at least 2 characters')
        return v.strip()

    @field_validator('message')
    @classmethod
    def validate_message(cls, v: str) -> str:
        if len(v.strip()) < 10:
            raise ValueError('Message must be at least 10 characters')
        return v.strip()


class ContactMessageOut(ContactMessageCreate):
    id: int
    is_read: bool
    created_at: datetime

    class Config:
        from_attributes = True


class ContactResponse(BaseModel):
    success: bool
    message: str


class StatsOut(BaseModel):
    total_projects: int
    featured_projects: int
    total_skills: int
    total_messages: int
    unread_messages: int
