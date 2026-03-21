from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from contextlib import asynccontextmanager
from database import get_db, Project, Skill, ContactMessage, init_db
from schemas import StatsOut
from routers import projects, skills, contact


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="Portfolio API",
    description="Backend API for my personal engineering portfolio",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3001",
        "https://*.vercel.app",
        "*",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(contact.router)


@app.get("/")
def root():
    return {
        "message": "Portfolio API is running 🚀",
        "docs": "/docs",
        "version": "1.0.0",
    }


@app.get("/api/stats", response_model=StatsOut)
def get_stats(db: Session = Depends(get_db)):
    return StatsOut(
        total_projects=db.query(Project).count(),
        featured_projects=db.query(Project).filter(Project.featured == True).count(),
        total_skills=db.query(Skill).count(),
        total_messages=db.query(ContactMessage).count(),
        unread_messages=db.query(ContactMessage).filter(ContactMessage.is_read == False).count(),
    )


@app.get("/health")
def health_check():
    return {"status": "healthy"}
