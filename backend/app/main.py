import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import engine, Base
from app.routes import projects, skills, experiences, contact, personal

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Portfolio API",
    description="Backend API for the portfolio website",
    version="1.0.0",
)

allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

extra_origins = os.getenv("ALLOWED_ORIGINS", "")
if extra_origins:
    allowed_origins.extend(
        origin.strip() for origin in extra_origins.split(",") if origin.strip()
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router)
app.include_router(skills.router)
app.include_router(experiences.router)
app.include_router(contact.router)
app.include_router(personal.router)


@app.get("/")
def root():
    return {"message": "Portfolio API is running", "docs": "/docs"}


@app.get("/api/health")
def health_check():
    return {"status": "healthy"}
