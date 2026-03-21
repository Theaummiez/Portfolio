from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Optional
from database import get_db, Skill
from schemas import SkillCreate, SkillOut

router = APIRouter(prefix="/api/skills", tags=["skills"])


@router.get("/", response_model=List[SkillOut])
def get_skills(
    category: Optional[str] = None,
    db: Session = Depends(get_db),
):
    query = db.query(Skill)
    if category:
        query = query.filter(Skill.category == category)
    return query.order_by(Skill.order).all()


@router.get("/categories", response_model=List[str])
def get_categories(db: Session = Depends(get_db)):
    categories = db.query(Skill.category).distinct().all()
    return [c[0] for c in categories]


@router.post("/", response_model=SkillOut, status_code=201)
def create_skill(skill: SkillCreate, db: Session = Depends(get_db)):
    db_skill = Skill(**skill.model_dump())
    db.add(db_skill)
    db.commit()
    db.refresh(db_skill)
    return db_skill


@router.delete("/{skill_id}", status_code=204)
def delete_skill(skill_id: int, db: Session = Depends(get_db)):
    skill = db.query(Skill).filter(Skill.id == skill_id).first()
    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")
    db.delete(skill)
    db.commit()
