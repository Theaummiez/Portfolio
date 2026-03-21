from sqlalchemy import create_engine, Column, Integer, String, Text, Boolean, DateTime, Float, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime, timezone

DATABASE_URL = "sqlite:///./portfolio.db"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    long_description = Column(Text)
    tech_stack = Column(JSON, default=list)
    github_url = Column(String(500))
    live_url = Column(String(500))
    image_url = Column(String(500))
    stars = Column(Integer, default=0)
    category = Column(String(100), default="Full-Stack")
    featured = Column(Boolean, default=False)
    order = Column(Integer, default=0)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


class Skill(Base):
    __tablename__ = "skills"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    level = Column(Integer, default=50)
    icon = Column(String(100))
    color = Column(String(50))
    order = Column(Integer, default=0)


class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    email = Column(String(200), nullable=False)
    subject = Column(String(300), nullable=False)
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db():
    Base.metadata.create_all(bind=engine)
    seed_data()


def seed_data():
    """Seed database with initial portfolio data."""
    db = SessionLocal()
    try:
        if db.query(Project).count() == 0:
            projects = [
                Project(
                    title="AI-Powered Analytics Platform",
                    description="Full-stack data analytics platform with ML-driven insights and real-time dashboards.",
                    long_description="Built a comprehensive analytics platform that processes millions of data points and provides actionable insights using machine learning models.",
                    tech_stack=["Python", "FastAPI", "React", "PostgreSQL", "TensorFlow", "Docker"],
                    github_url="https://github.com",
                    live_url="https://demo.example.com",
                    stars=128,
                    category="Full-Stack",
                    featured=True,
                    order=1,
                ),
                Project(
                    title="Distributed Task Scheduler",
                    description="Microservices-based task scheduling system with fault tolerance and auto-scaling.",
                    long_description="Designed and implemented a distributed task scheduling system capable of handling thousands of concurrent jobs.",
                    tech_stack=["Python", "Redis", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
                    github_url="https://github.com",
                    stars=89,
                    category="Backend",
                    featured=True,
                    order=2,
                ),
                Project(
                    title="Smart Campus App",
                    description="Mobile-first web app for campus management with IoT sensor integration.",
                    long_description="Developed a smart campus application that integrates IoT sensors for room booking, energy monitoring, and campus navigation.",
                    tech_stack=["Next.js", "TypeScript", "Node.js", "MongoDB", "MQTT", "Tailwind"],
                    github_url="https://github.com",
                    live_url="https://demo.example.com",
                    stars=67,
                    category="Full-Stack",
                    featured=True,
                    order=3,
                ),
                Project(
                    title="Real-Time Collaboration Tool",
                    description="WebSocket-based collaborative coding environment with live code execution.",
                    long_description="Built a real-time collaborative editor with syntax highlighting, live execution, and video chat.",
                    tech_stack=["React", "Node.js", "WebSocket", "Docker", "Monaco Editor"],
                    github_url="https://github.com",
                    stars=156,
                    category="Full-Stack",
                    featured=False,
                    order=4,
                ),
                Project(
                    title="ML Model Deployment API",
                    description="RESTful API for serving ML models with A/B testing and monitoring.",
                    long_description="Created a production-ready API platform for deploying and monitoring machine learning models.",
                    tech_stack=["Python", "FastAPI", "PyTorch", "Redis", "Prometheus", "Docker"],
                    github_url="https://github.com",
                    stars=94,
                    category="Backend",
                    featured=False,
                    order=5,
                ),
                Project(
                    title="DevSecOps Pipeline",
                    description="Automated CI/CD pipeline with integrated security scanning and testing.",
                    long_description="Built a complete DevSecOps pipeline integrating SAST, DAST, and dependency scanning.",
                    tech_stack=["GitHub Actions", "Docker", "Terraform", "AWS", "Python", "Shell"],
                    github_url="https://github.com",
                    stars=73,
                    category="DevOps",
                    featured=False,
                    order=6,
                ),
            ]
            db.add_all(projects)

        if db.query(Skill).count() == 0:
            skills = [
                Skill(name="React / Next.js", category="Frontend", level=90, order=1),
                Skill(name="TypeScript", category="Frontend", level=85, order=2),
                Skill(name="Tailwind CSS", category="Frontend", level=90, order=3),
                Skill(name="Python / FastAPI", category="Backend", level=88, order=4),
                Skill(name="Node.js / Express", category="Backend", level=82, order=5),
                Skill(name="PostgreSQL", category="Database", level=85, order=6),
                Skill(name="SQLite", category="Database", level=88, order=7),
                Skill(name="Docker", category="DevOps", level=80, order=8),
                Skill(name="Git / GitHub", category="DevOps", level=92, order=9),
                Skill(name="Machine Learning", category="AI & Data", level=78, order=10),
                Skill(name="TensorFlow / PyTorch", category="AI & Data", level=72, order=11),
                Skill(name="C / C++", category="Systems", level=80, order=12),
            ]
            db.add_all(skills)

        db.commit()
    except Exception as e:
        db.rollback()
        print(f"Seeding error: {e}")
    finally:
        db.close()
