# Portfolio

Portfolio personnel pour un futur ingénieur : interface **Next.js / React** et API **Python (FastAPI)** avec persistance **SQLite** (via SQLAlchemy) pour les messages de contact.

## Prérequis

- Node.js 20+
- Python 3.11+ (avec `pip`)

## Démarrage

**1. Frontend** (dossier `web`)

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

**2. API** (dossier `api`)

```bash
cd api
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Santé : [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health).

La variable `NEXT_PUBLIC_API_URL` dans `web/.env.local` doit pointer vers cette API (par défaut `http://127.0.0.1:8000`).

## Figma

Le fichier Figma n’est pas lisible depuis cet environnement (accès réservé). Adaptez couleurs, textes et blocs dans `web/src/components/` pour coller à votre maquette.

## Production

- Build front : `cd web && npm run build && npm start`
- API : `uvicorn main:app --host 0.0.0.0 --port 8000` (ou conteneur). Pour PostgreSQL, définissez `DATABASE_URL` (SQLAlchemy) au lieu du SQLite par défaut.
