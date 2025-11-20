'use server'

import resend from "../../../../resend.config";
import { NextResponse } from "next/server";
import crypto from "crypto";
import db from "@/db";
export const runtime = 'edge';


db.prepare(`
  CREATE TABLE IF NOT EXISTS subscribers (
    email TEXT PRIMARY KEY,
    token TEXT,
    confirmed INTEGER DEFAULT 0
  )
`).run();

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Невалиден имейл" }, { status: 400 });
    }

    const token = crypto.randomBytes(16).toString("hex");

    db.prepare(`
      INSERT INTO subscribers (email, token, confirmed)
      VALUES (?, ?, 0)
      ON CONFLICT(email) DO UPDATE SET token = excluded.token, confirmed = 0
    `).run(email, token);

    await resend.emails.send({
      from: "AI Innovations <onboarding@resend.dev>",
      to: email,
      subject: "Потвърдете своя абонамент",
      html: `
        <p>Благодарим ви, че се абонирахте! Моля, потвърдете имейла си, като кликнете върху връзката по-долу:</p>
        <a href="http://localhost:3000/api/subscribe?token=${token}">
          Потвърдете имейла си
        </a>
      `,
    });

    return NextResponse.json({ success: true, message: "Имейл за потвърждение беше изпратен!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Неуспешен опит за абонамент" }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return new Response(renderPage("Грешка", "Липсва токен за потвърждение."), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const user = db.prepare("SELECT email FROM subscribers WHERE token = ? AND confirmed = 0").get(token);

    if (!user) {
      return new Response(renderPage("Невалиден токен", "Тази връзка е невалидна или вече е използвана."), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    db.prepare("UPDATE subscribers SET confirmed = 1, token = NULL WHERE email = ?").run(user.email);

    await resend.emails.send({
      from: "AI Innovations <onboarding@resend.dev>",
      to: user.email,
      subject: "Добре дошли в нашите новини!",
      html: `<p>Здравейте! Вашият имейл беше потвърден успешно. Ще започнете да получавате нашите актуализации скоро.</p>`,
    });

    return new Response(
      renderPage("Успешно потвърждение", `Имейлът <strong>${user.email}</strong> беше потвърден успешно!`),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(renderPage("Грешка", "Възникна проблем при потвърждението."), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}

// Helper: render a simple styled confirmation page
function renderPage(title, message) {
  return `
  <!DOCTYPE html>
  <html lang="bg">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body {
        background: #f9fafb;
        font-family: system-ui, -apple-system, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: #111827;
      }
      .card {
        background: white;
        padding: 2rem 3rem;
        border-radius: 1rem;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        text-align: center;
        max-width: 400px;
      }
      h1 {
        color: #2563eb;
        margin-bottom: 1rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
      .footer {
        margin-top: 2rem;
        font-size: 0.875rem;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${title}</h1>
      <p>${message}</p>
      <div class="footer">© ${new Date().getFullYear()} AI Innovations</div>
    </div>
  </body>
  </html>`;
}
