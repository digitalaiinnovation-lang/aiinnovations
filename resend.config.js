// src/resend.js
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

// Prevent build crash if key is missing
if (!apiKey) {
  console.warn("⚠ RESEND_API_KEY is missing — email client disabled.");
}

const resend = apiKey ? new Resend(apiKey) : null;

export default resend;