from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Optional

from app.database import get_db
from app.models.models import Experience
from app.schemas.schemas import ExperienceCreate, ExperienceResponse

router = APIRouter(prefix="/api/experiences", tags=["experiences"])


@router.get("/", response_model=list[ExperienceResponse])
def get_experiences(
    type: Optional[str] = None,
    db: Session = Depends(get_db),
):
    query = db.query(Experience)
    if type:
        query = query.filter(Experience.type == type)
    return query.order_by(Experience.sort_order).all()


@router.get("/{experience_id}", response_model=ExperienceResponse)
def get_experience(experience_id: int, db: Session = Depends(get_db)):
    exp = db.query(Experience).filter(Experience.id == experience_id).first()
    if not exp:
        raise HTTPException(status_code=404, detail="Experience not found")
    return exp


@router.post("/", response_model=ExperienceResponse, status_code=201)
def create_experience(
    experience: ExperienceCreate, db: Session = Depends(get_db)
):
    db_exp = Experience(**experience.model_dump())
    db.add(db_exp)
    db.commit()
    db.refresh(db_exp)
    return db_exp


@router.put("/{experience_id}", response_model=ExperienceResponse)
def update_experience(
    experience_id: int,
    experience: ExperienceCreate,
    db: Session = Depends(get_db),
):
    db_exp = db.query(Experience).filter(Experience.id == experience_id).first()
    if not db_exp:
        raise HTTPException(status_code=404, detail="Experience not found")
    for key, value in experience.model_dump().items():
        setattr(db_exp, key, value)
    db.commit()
    db.refresh(db_exp)
    return db_exp


@router.delete("/{experience_id}", status_code=204)
def delete_experience(experience_id: int, db: Session = Depends(get_db)):
    db_exp = db.query(Experience).filter(Experience.id == experience_id).first()
    if not db_exp:
        raise HTTPException(status_code=404, detail="Experience not found")
    db.delete(db_exp)
    db.commit()
