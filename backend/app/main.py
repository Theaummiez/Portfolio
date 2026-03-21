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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
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
