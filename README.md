# Portfolio - Future Engineer

A modern, full-stack portfolio website built with **Next.js**, **React**, **Python (FastAPI)**, and **SQLite**. Features a dark, professional design with smooth animations, perfect for showcasing engineering projects, skills, and experience.

## Tech Stack

### Frontend
- **Next.js 14** — React framework with App Router
- **React 18** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Beautiful icons

### Backend
- **Python 3.12+** — Backend language
- **FastAPI** — High-performance API framework
- **SQLAlchemy 2.0** — ORM with async support
- **SQLite** — Lightweight relational database
- **Pydantic** — Data validation

### DevOps
- **Docker** — Containerization
- **Docker Compose** — Multi-container orchestration

## Features

- **Hero Section** — Animated introduction with social links and CTA
- **About Section** — Bio, highlights, stats, and a code snippet visual
- **Projects Section** — Featured project cards with hover effects, filtering
- **Skills Section** — Categorized tech stack with animated progress bars
- **Experience Timeline** — Work experience and education with timeline UI
- **Contact Form** — Functional contact form connected to the API
- **Responsive Design** — Mobile-first, looks great on all devices
- **Dark Theme** — Professional dark UI with glassmorphism effects
- **Smooth Animations** — Scroll-triggered animations with Framer Motion

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- (Optional) Docker & Docker Compose

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run at [http://localhost:3000](http://localhost:3000).

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python3 seed_data.py          # Seed the database with sample data
uvicorn app.main:app --reload  # Start the API server
```

The API will run at [http://localhost:8000](http://localhost:8000).
API documentation is available at [http://localhost:8000/docs](http://localhost:8000/docs).

### Docker (Full Stack)

```bash
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000](http://localhost:8000)

## Project Structure

```
├── frontend/                  # Next.js frontend
│   ├── src/
│   │   ├── app/               # Next.js App Router pages
│   │   ├── components/        # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── lib/               # Data and utilities
│   ├── public/                # Static assets
│   └── tailwind.config.ts     # Tailwind configuration
│
├── backend/                   # Python FastAPI backend
│   ├── app/
│   │   ├── main.py            # FastAPI app entry point
│   │   ├── database.py        # Database configuration
│   │   ├── models/            # SQLAlchemy models
│   │   ├── routes/            # API route handlers
│   │   └── schemas/           # Pydantic schemas
│   ├── seed_data.py           # Database seeder
│   └── requirements.txt       # Python dependencies
│
├── docker-compose.yml         # Docker orchestration
└── README.md
```

## API Endpoints

| Method | Endpoint                       | Description                 |
|--------|-------------------------------|-----------------------------|
| GET    | `/api/projects`               | List all projects           |
| GET    | `/api/projects?featured=true` | List featured projects      |
| POST   | `/api/projects`               | Create a project            |
| PUT    | `/api/projects/{id}`          | Update a project            |
| DELETE | `/api/projects/{id}`          | Delete a project            |
| GET    | `/api/skills`                 | List all skills             |
| POST   | `/api/skills`                 | Create a skill              |
| GET    | `/api/experiences`            | List all experiences        |
| POST   | `/api/experiences`            | Create an experience        |
| POST   | `/api/contact`                | Send a contact message      |
| GET    | `/api/contact`                | List all messages           |
| GET    | `/api/personal`               | Get personal info           |
| PUT    | `/api/personal`               | Update personal info        |
| GET    | `/api/health`                 | Health check                |

## Customization

1. **Personal Info**: Edit `frontend/src/lib/data.ts` or update via the API at `/api/personal`
2. **Projects**: Add/edit in `data.ts` or manage through the API
3. **Skills**: Customize categories and levels in `data.ts` or via API
4. **Colors**: Modify the color palette in `tailwind.config.ts`
5. **Fonts**: Change fonts in `globals.css`

## License

MIT
