# Portfolio — Full-Stack Engineering Portfolio

A beautiful, modern portfolio website built for future engineers. Showcases projects, skills, experience, and a contact form with a real backend.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React 18, TypeScript, Tailwind CSS |
| Backend | Python 3.12, FastAPI, SQLAlchemy |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Animations | CSS animations (no heavy libs needed) |
| Containerization | Docker + Docker Compose |

## Features

- **Animated Hero** — particle canvas, typing animation, gradient orbs
- **About** — profile card, stats, key highlights
- **Skills** — animated progress bars across 6 categories
- **Projects** — filterable grid with live/GitHub links, fetched from API
- **Experience** — alternating timeline (work & education), certifications
- **Contact** — form with backend persistence and toast notifications
- **Responsive** — fully mobile-first design
- **Dark theme** — consistent blue/cyan/purple gradient system

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev        # → http://localhost:3000
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000   # → http://localhost:8000
```

API docs available at: `http://localhost:8000/docs`

### Docker (full stack)

```bash
docker compose up --build
```

## Project Structure

```
portfolio/
├── frontend/                  # Next.js app
│   ├── src/
│   │   ├── app/               # App Router pages
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   └── components/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   └── Dockerfile
├── backend/                   # FastAPI app
│   ├── main.py                # App entry point + CORS
│   ├── database.py            # SQLAlchemy models + seeding
│   ├── schemas.py             # Pydantic validation schemas
│   ├── routers/
│   │   ├── projects.py        # CRUD for projects
│   │   ├── skills.py          # CRUD for skills
│   │   └── contact.py        # Contact form handler
│   └── Dockerfile
└── docker-compose.yml
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects/` | List all projects |
| GET | `/api/projects/?category=Backend` | Filter by category |
| GET | `/api/projects/?featured=true` | Featured only |
| POST | `/api/projects/` | Create project |
| GET | `/api/skills/` | List all skills |
| POST | `/api/contact/` | Submit contact form |
| GET | `/api/stats` | Portfolio stats |

## Customization

Edit `frontend/src/components/` files to update:
- **Hero.tsx** — name, title, social links
- **About.tsx** — bio, stats, photo
- **Skills.tsx** — skill levels and categories
- **Projects.tsx** — or use the API to manage projects dynamically
- **Experience.tsx** — work/education timeline, certifications
- **Contact.tsx** — email and contact info

## Deployment

- **Frontend** → Vercel (`vercel deploy`)
- **Backend** → Railway, Render, or any VPS
- **Database** → Switch `DATABASE_URL` to PostgreSQL for production
