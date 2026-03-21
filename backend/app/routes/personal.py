from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.models import PersonalInfo
from app.schemas.schemas import PersonalInfoBase, PersonalInfoResponse

router = APIRouter(prefix="/api/personal", tags=["personal"])


@router.get("/", response_model=PersonalInfoResponse)
def get_personal_info(db: Session = Depends(get_db)):
    info = db.query(PersonalInfo).first()
    if not info:
        raise HTTPException(status_code=404, detail="Personal info not found")
    return info


@router.put("/", response_model=PersonalInfoResponse)
def update_personal_info(
    data: PersonalInfoBase, db: Session = Depends(get_db)
):
    info = db.query(PersonalInfo).first()
    if not info:
        info = PersonalInfo(**data.model_dump())
        db.add(info)
    else:
        for key, value in data.model_dump().items():
            setattr(info, key, value)
    db.commit()
    db.refresh(info)
    return info
