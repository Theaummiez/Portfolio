"""
Seed the database with initial portfolio data.
Run: python seed_data.py
"""
from app.database import SessionLocal, engine, Base
from app.models.models import Project, Skill, Experience, PersonalInfo

Base.metadata.create_all(bind=engine)


def seed():
    db = SessionLocal()

    if db.query(PersonalInfo).first():
        print("Database already seeded. Skipping.")
        db.close()
        return

    info = PersonalInfo(
        name="Alex Martin",
        title="Future Software Engineer",
        subtitle="Building tomorrow's solutions today",
        bio=(
            "Passionate engineering student with a love for clean code, "
            "innovative solutions, and cutting-edge technology. I specialize "
            "in full-stack development, systems design, and creating impactful "
            "digital experiences."
        ),
        email="alex.martin@email.com",
        github_url="https://github.com",
        linkedin_url="https://linkedin.com",
        location="Montreal, Canada",
        resume_url="#",
        avatar_url="/images/avatar.svg",
    )
    db.add(info)

    projects_data = [
        Project(
            title="CloudSync Platform",
            description="A distributed cloud synchronization platform with real-time collaboration features.",
            long_description="Built a scalable cloud platform that enables real-time file synchronization and collaboration across distributed teams.",
            tags=["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=True,
            sort_order=1,
        ),
        Project(
            title="AI Code Assistant",
            description="An intelligent code completion and review tool powered by machine learning.",
            long_description="Developed an AI-powered code assistant that provides intelligent suggestions and automated code reviews.",
            tags=["Python", "TensorFlow", "FastAPI", "React", "TypeScript"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=True,
            sort_order=2,
        ),
        Project(
            title="Smart IoT Dashboard",
            description="Real-time monitoring dashboard for IoT devices with predictive analytics.",
            long_description="Created a comprehensive IoT monitoring solution with real-time data visualization and predictive maintenance alerts.",
            tags=["Next.js", "MQTT", "InfluxDB", "Grafana", "Python"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=True,
            sort_order=3,
        ),
        Project(
            title="CryptoTracker",
            description="Cryptocurrency portfolio tracker with real-time market data and analytics.",
            long_description="A full-featured crypto portfolio management app with real-time price tracking.",
            tags=["React Native", "Node.js", "WebSocket", "MongoDB"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=False,
            sort_order=4,
        ),
        Project(
            title="DevOps Pipeline Tool",
            description="CI/CD pipeline management tool with automated testing and deployment.",
            long_description="Automated CI/CD pipeline builder with visual workflow editor.",
            tags=["Go", "Docker", "Kubernetes", "Terraform", "AWS"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=False,
            sort_order=5,
        ),
        Project(
            title="EcoTrack App",
            description="Carbon footprint tracking application with sustainability recommendations.",
            long_description="A mobile-first app helping users track and reduce their carbon footprint.",
            tags=["Flutter", "Firebase", "Python", "ML Kit"],
            github_url="https://github.com",
            live_url="https://example.com",
            featured=False,
            sort_order=6,
        ),
    ]
    db.add_all(projects_data)

    skills_data = [
        Skill(name="React / Next.js", icon="⚛️", level=90, category="Frontend", sort_order=1),
        Skill(name="TypeScript", icon="📘", level=88, category="Frontend", sort_order=2),
        Skill(name="Tailwind CSS", icon="🎨", level=92, category="Frontend", sort_order=3),
        Skill(name="HTML / CSS", icon="🌐", level=95, category="Frontend", sort_order=4),
        Skill(name="Python", icon="🐍", level=88, category="Backend", sort_order=1),
        Skill(name="Node.js", icon="🟢", level=85, category="Backend", sort_order=2),
        Skill(name="FastAPI", icon="⚡", level=82, category="Backend", sort_order=3),
        Skill(name="PostgreSQL", icon="🐘", level=80, category="Backend", sort_order=4),
        Skill(name="Docker", icon="🐳", level=78, category="DevOps", sort_order=1),
        Skill(name="Git / GitHub", icon="🔀", level=90, category="DevOps", sort_order=2),
        Skill(name="AWS / Cloud", icon="☁️", level=72, category="DevOps", sort_order=3),
        Skill(name="Linux", icon="🐧", level=82, category="DevOps", sort_order=4),
        Skill(name="TensorFlow", icon="🧠", level=65, category="AI/ML", sort_order=1),
        Skill(name="Data Analysis", icon="📊", level=75, category="AI/ML", sort_order=2),
        Skill(name="C / C++", icon="⚙️", level=78, category="Systems", sort_order=1),
        Skill(name="System Design", icon="🏗️", level=70, category="Systems", sort_order=2),
    ]
    db.add_all(skills_data)

    experiences_data = [
        Experience(
            title="Software Engineering Intern",
            company="TechCorp Inc.",
            location="Montreal, QC",
            period="May 2025 – Aug 2025",
            description=[
                "Developed RESTful APIs serving 10K+ daily requests using FastAPI and PostgreSQL",
                "Implemented automated testing pipeline reducing bug reports by 40%",
                "Collaborated with cross-functional team of 8 engineers on microservices architecture",
            ],
            type="work",
            sort_order=1,
        ),
        Experience(
            title="Full Stack Developer",
            company="StartupLab",
            location="Remote",
            period="Jan 2025 – Apr 2025",
            description=[
                "Built responsive web applications using React, Next.js, and Tailwind CSS",
                "Designed and implemented database schemas for complex business logic",
                "Mentored 3 junior developers on best practices and code review",
            ],
            type="work",
            sort_order=2,
        ),
        Experience(
            title="B.Eng Software Engineering",
            company="Polytechnique Montreal",
            location="Montreal, QC",
            period="2022 – 2026",
            description=[
                "Relevant coursework: Data Structures, Algorithms, Operating Systems, Database Systems",
                "Dean's List — GPA: 3.8/4.0",
                "Active member of the Software Engineering Student Association",
            ],
            type="education",
            sort_order=1,
        ),
        Experience(
            title="DEC in Computer Science",
            company="CÉGEP de Montréal",
            location="Montreal, QC",
            period="2020 – 2022",
            description=[
                "Foundation in programming, mathematics, and computer science principles",
                "Led team project: automated inventory management system",
                "Graduated with Honours",
            ],
            type="education",
            sort_order=2,
        ),
    ]
    db.add_all(experiences_data)

    db.commit()
    db.close()
    print("Database seeded successfully!")


if __name__ == "__main__":
    seed()
