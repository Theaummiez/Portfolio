from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class ProjectBase(BaseModel):
    title: str
    description: str
    long_description: Optional[str] = None
    image_url: Optional[str] = None
    tags: list[str] = []
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    featured: bool = False
    sort_order: int = 0


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class SkillBase(BaseModel):
    name: str
    icon: Optional[str] = None
    level: float = 0
    category: str
    sort_order: int = 0


class SkillCreate(SkillBase):
    pass


class SkillResponse(SkillBase):
    id: int

    class Config:
        from_attributes = True


class ExperienceBase(BaseModel):
    title: str
    company: str
    location: Optional[str] = None
    period: str
    description: list[str] = []
    type: str
    sort_order: int = 0


class ExperienceCreate(ExperienceBase):
    pass


class ExperienceResponse(ExperienceBase):
    id: int

    class Config:
        from_attributes = True


class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str


class ContactMessageResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: str
    message: str
    read: bool
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class PersonalInfoBase(BaseModel):
    name: str
    title: str
    subtitle: Optional[str] = None
    bio: Optional[str] = None
    email: Optional[str] = None
    github_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    location: Optional[str] = None
    resume_url: Optional[str] = None
    avatar_url: Optional[str] = None


class PersonalInfoResponse(PersonalInfoBase):
    id: int

    class Config:
        from_attributes = True
