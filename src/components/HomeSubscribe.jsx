'use client'

import { useTranslations } from "use-intl";
import { useState } from "react";

export default function HomeSubscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const t = useTranslations("Subscribe");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: t("success") || "Confirmation email sent!" });
        setEmail("");
      } else {
        setMessage({ type: "error", text: data.error || t("error") || "Failed to send email." });
      }
    } catch (error) {
      console.error(error);
      setMessage({ type: "error", text: t("error") || "Failed to send email." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:px-[64px] px-[32px]">
      <h3 className="text-[#4A1498] md:text-[36px] text-[16px] text-center md:mt-[300px] mt-[100px]">{t("heading")}</h3>
      <p className="text-[#6C63FF] md:w-[871px] w-[399px] md:text-[24px] text-[14px] text-center mx-auto mt-[20px]">{t("desc")}</p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="email" className="text-[#9146FF] md:text-[24px] text-[20px] mt-[128px]">{t("email")}*</label>
        <input
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-[2px] border-b-[#4A1498] mt-[32px] w-full focus:outline-none"
        />

        <div className="flex mt-[20px] gap-[12px]">
          <input type="checkbox" required className="border-[#4A1498] accent-[#4A1498] w-[22px] h-[22px]" />
          <span className="text-[#4A1498] md:text-[20px] text-[15px]">{t("bonus")}</span>
        </div>

        {message && (
          <p
            className={`mt-[16px] text-[18px] ${message.type === "success" ? "text-green-600" : "text-red-600"}`}
          >
            {message.text}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`text-[#9146FF] md:text-[32px] text-[15px] italic mt-[40px] mb-[100px] border-[1px] border-[#6C63FF] rounded-[100px] font-averia ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? t("loading") || "Sending..." : t("submit")}
        </button>
      </form>
    </section>
  )
}
