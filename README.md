# Portfolio

Portfolio personnel développé avec Next.js (frontend) et FastAPI (backend). Application FullStack responsive avec formulaire de contact et gestion de contenu via API REST.

## Stack

**Frontend**
- Next.js 14, React 18, TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icones)

**Backend**
- Python 3.12+, FastAPI
- SQLAlchemy 2.0, SQLite
- Pydantic

**Infra**
- Docker, Docker Compose
- Vercel (frontend)
- Render (backend)

## Features

- Sections : Hero, A propos, Projets (carrousel), Competences, Parcours, Contact
- Formulaire de contact avec notifications email (EmailJS) et stockage en base
- Donnees gerees via API REST (CRUD complet) avec systeme de fallback sur donnees statiques
- Interface responsive
- Theme sombre
- Framer Motion

## Installation

Prerequis : Node.js 18+, Python 3.10+

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

Accessible sur http://localhost:3000

**Backend**

```bash
cd backend
pip install -r requirements.txt
python3 seed_data.py
uvicorn app.main:app --reload
```

API sur http://localhost:8000, documentation sur http://localhost:8000/docs

## Docker

```bash
docker-compose up --build
```

Frontend : http://localhost:3000
Backend : http://localhost:8000

## Live Demo

Frontend : https://tomy-tavanae-portfolio.vercel.app

API : https://portfolio-api-2461.onrender.com

Docs API : https://portfolio-api-2461.onrender.com/docs
