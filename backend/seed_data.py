"""
Seed the database with Tomy's real portfolio data.
Run: python3 seed_data.py
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
        name="Tomy Tavanae-Bouteilley",
        title="Étudiant Ingénieur Informatique & Cybersécurité",
        subtitle="Recherche alternance 2026–2029",
        bio=(
            "Passionné par l'informatique depuis la seconde où j'ai découvert les "
            "Sciences de l'Ingénieur, puis confirmé par la spécialité NSI, je poursuis "
            "aujourd'hui un diplôme d'ingénieur en électronique et informatique à ESEO. "
            "Actuellement en mobilité internationale à l'Université des Sciences de "
            "Hanoï (Vietnam), je recherche une alternance longue durée (2026–2029) en "
            "Cybersécurité."
        ),
        email="tomy.tavanaebouteilley@reseau.eseo.fr",
        github_url="https://github.com/Theaummiez",
        linkedin_url="https://www.linkedin.com/in/tomy-tavanae-bouteilley",
        location="Dijon, France",
        resume_url="#",
        avatar_url="/images/avatar.svg",
    )
    db.add(info)

    projects_data = [
        Project(
            title="Extension d'Assistance Intelligente",
            description="Extension navigateur pour analyser des questions et générer des réponses automatisées via API.",
            long_description="Développement d'une extension navigateur avec appels API asynchrones, gestion des réponses dynamiques, injection DOM, raccourcis clavier et permissions Manifest v3.",
            tags=["JavaScript", "API REST", "Manifest v3", "DOM", "Chrome Extension"],
            github_url="https://github.com/Theaummiez",
            live_url="#",
            featured=True,
            sort_order=1,
        ),
        Project(
            title="Distributeur Automatique de Cartes",
            description="Conception et développement d'un distributeur automatisé de cartes avec Arduino.",
            long_description="Projet ESEO : programmation C/C++ pour piloter moteurs et servo-moteurs, intégration de capteurs et actionneurs, logique de distribution, tests et calibration.",
            tags=["C/C++", "Arduino", "Capteurs", "Servo-moteurs", "Électronique"],
            github_url="https://github.com/Theaummiez",
            live_url="#",
            featured=True,
            sort_order=2,
        ),
        Project(
            title="Mini-Jeu Unity",
            description="Développement d'un mini-jeu avec mécaniques de gameplay, collisions et scripts en C#.",
            long_description="Projet personnel sous Unity : mécaniques de gameplay, gestion des collisions, scripting en C# et design de niveaux.",
            tags=["C#", "Unity", "Game Dev", "POO", "Scripting"],
            github_url="https://github.com/Theaummiez",
            live_url="#",
            featured=True,
            sort_order=3,
        ),
        Project(
            title="App Morse – Swift",
            description="Application iOS permettant de convertir du texte en code Morse et de le transmettre visuellement ou par vibration.",
            long_description="Développement d'une application native iOS en Swift avec Xcode : saisie de texte, conversion en code Morse, affichage visuel des signaux et retour haptique.",
            tags=["Swift", "iOS", "Xcode", "UIKit", "Mobile"],
            github_url="https://github.com/Theaummiez",
            live_url="#",
            featured=True,
            sort_order=4,
        ),
        Project(
            title="Morpion",
            description="Mon tout premier projet : un jeu de morpion interactif, les premiers pas dans la programmation.",
            long_description="Premier projet de programmation : développement d'un jeu de morpion (Tic-Tac-Toe) avec gestion des tours, détection de victoire et interface joueur contre joueur.",
            tags=["Python", "Logique", "Premier projet"],
            github_url="https://github.com/Theaummiez",
            live_url="#",
            featured=True,
            sort_order=5,
        ),
    ]
    db.add_all(projects_data)

    skills_data = [
        Skill(name="Python", icon="🐍", level=80, category="Développement", sort_order=1),
        Skill(name="C#", icon="🎮", level=72, category="Développement", sort_order=2),
        Skill(name="JavaScript (ES6+)", icon="⚡", level=78, category="Développement", sort_order=3),
        Skill(name="C / C++ (POO)", icon="⚙️", level=75, category="Développement", sort_order=4),
        Skill(name="React", icon="⚛️", level=70, category="Web", sort_order=1),
        Skill(name="Next.js", icon="▲", level=65, category="Web", sort_order=2),
        Skill(name="HTML5 / CSS3", icon="🌐", level=85, category="Web", sort_order=3),
        Skill(name="APIs REST", icon="🔗", level=72, category="Web", sort_order=4),
        Skill(name="Git / GitHub", icon="🔀", level=82, category="Outils", sort_order=1),
        Skill(name="Visual Studio Code", icon="💻", level=88, category="Outils", sort_order=2),
        Skill(name="Unity", icon="🎮", level=60, category="Outils", sort_order=3),
        Skill(name="Linux", icon="🐧", level=55, category="Outils", sort_order=4),
        Skill(name="Xcode", icon="🍎", level=45, category="Outils", sort_order=5),
        Skill(name="Sécurité Applicative", icon="🛡️", level=55, category="Cybersécurité", sort_order=1),
        Skill(name="Vulnérabilités (SQL Injection...)", icon="🔓", level=50, category="Cybersécurité", sort_order=2),
        Skill(name="PicoCTF / TryHackMe", icon="🏴", level=50, category="Cybersécurité", sort_order=3),
    ]
    db.add_all(skills_data)

    experiences_data = [
        Experience(
            title="Agent de tri",
            company="DPD",
            location="France",
            period="2024 – 2025 (CDD – 1 mois)",
            description=[
                "Tri et distribution de colis dans un environnement logistique à cadence élevée",
                "Respect des délais et des normes de sécurité",
                "Travail en équipe dans un contexte opérationnel dynamique",
            ],
            type="work",
            sort_order=1,
        ),
        Experience(
            title="Opérateur de conditionnement",
            company="Joseph Drouhin",
            location="Beaune, France",
            period="2023 – 2024 (CDD – 1 mois)",
            description=[
                "Travail en équipe en environnement industriel",
                "Respect strict des procédures et des cadences de production",
                "Contrôle qualité et conditionnement",
            ],
            type="work",
            sort_order=2,
        ),
        Experience(
            title="Vendanges",
            company="Domaines viticoles (Meursault)",
            location="Meursault, France",
            period="2023 – 2025",
            description=[
                "Domaine Pascal Prunier-Bonheur & Domaine Renaud Boyer",
                "Travail physique en équipe",
                "Rigueur, endurance et engagement",
            ],
            type="work",
            sort_order=3,
        ),
        Experience(
            title="Diplôme d'ingénieur (grade de Master)",
            company="ESEO",
            location="Angers, France",
            period="Depuis 2024",
            description=[
                "Cycle préparatoire intégré",
                "Formation généraliste en informatique, mathématiques et sciences de l'ingénieur",
                "Spécialisation visée : Cybersécurité",
            ],
            type="education",
            sort_order=1,
        ),
        Experience(
            title="Mobilité Internationale",
            company="Université des Sciences de Hanoï (USTH)",
            location="Hanoï, Vietnam",
            period="2025 – 2026",
            description=[
                "Suivi des enseignements en anglais",
                "Formation scientifique dans un environnement international",
                "Développement de l'autonomie et adaptation interculturelle",
            ],
            type="education",
            sort_order=2,
        ),
        Experience(
            title="Baccalauréat Général – Mention Assez Bien",
            company="Lycée Clos Maire",
            location="Beaune, France",
            period="2024",
            description=[
                "Spécialités : Mathématiques & NSI (Numérique et Sciences Informatiques)",
                "Mention Assez Bien",
            ],
            type="education",
            sort_order=3,
        ),
    ]
    db.add_all(experiences_data)

    db.commit()
    db.close()
    print("Database seeded successfully with Tomy's data!")


if __name__ == "__main__":
    seed()
