from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db, ContactMessage
from schemas import ContactMessageCreate, ContactMessageOut, ContactResponse

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("/", response_model=ContactResponse)
def send_message(message: ContactMessageCreate, db: Session = Depends(get_db)):
    db_message = ContactMessage(**message.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return ContactResponse(
        success=True,
        message="Your message has been received! I'll get back to you within 24 hours."
    )


@router.get("/messages", response_model=List[ContactMessageOut])
def get_messages(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    return (
        db.query(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )


@router.patch("/messages/{message_id}/read", response_model=ContactMessageOut)
def mark_as_read(message_id: int, db: Session = Depends(get_db)):
    message = db.query(ContactMessage).filter(ContactMessage.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")
    message.is_read = True
    db.commit()
    db.refresh(message)
    return message
