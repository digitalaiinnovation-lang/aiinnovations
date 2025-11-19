'use server';

import resend from "../../../../resend.config";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, website, message, inquiryType } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Моля, попълнете всички задължителни полета." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Невалиден имейл адрес." },
        { status: 400 }
      );
    }

    // Send to your company inbox
    await resend.emails.send({
      from: "AI Innovations <onboarding@resend.dev>",
      to: "markov.aiinv@gmail.com", 
      subject: `Ново съобщение от ${name}`,
      html: `
        <h2>Ново съобщение от контактната форма</h2>
        <p><strong>Име:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || "—"}</p>
        <p><strong>Уебсайт:</strong> ${website || "—"}</p>
        <p><strong>Вид Запитване:</strong> ${inquiryType}</p>
        <p><strong>Съобщение:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Съобщението беше изпратено успешно!",
    });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { error: "Неуспешен опит за изпращане на съобщение." },
      { status: 500 }
    );
  }
}