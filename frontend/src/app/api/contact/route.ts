import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis." },
        { status: 400 }
      );
    }

    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    if (backendUrl) {
      try {
        const res = await fetch(`${backendUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (res.ok) {
          return NextResponse.json({ status: "sent_to_backend" });
        }
      } catch {
        // Backend unavailable — fall through to local handling
      }
    }

    console.log("=== Nouveau message de contact ===");
    console.log(`Nom: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Objet: ${subject}`);
    console.log(`Message: ${message}`);
    console.log("==================================");

    return NextResponse.json({ status: "logged" });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors du traitement du message." },
      { status: 500 }
    );
  }
}
