'use client'

import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "use-intl";

export default function ContactForm({ inquiryType }) {
    const t = useTranslations("ContactForm");
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        website: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, inquiryType }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({
                    name: "",
                    website: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    // When message is sent successfully, show thank-you screen
    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center gap-6 text-center">
                <h2 className="md:text-[40px] text-[20px] md:mb-[180px] mb-[80px] font-semibold">
                    {t("successMessage")}
                </h2>
                <button
                    onClick={() => router.push("/")}
                    className="shadow-[inset_0px_4px_4px_0px_#4A1498] lg:text-[16px] text-[12px] md:w-[191px] w-[148px] lg:h-[41px] h-[35px] border-[1px] border-[#4A1498] rounded-[25px] bg-[#D5D1FE]"
                >
                    {t("backToHome")}
                </button>
            </div>
        );
    }

    // Default: show form
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[40px] lg:w-[795px] w-[341px]"
        >
            <div className="flex justify-between">
                <ContactFormInput
                    name="name"
                    type="text"
                    placeholder={t("name")}
                    value={formData.name}
                    onChange={handleChange}
                />
                <ContactFormInput
                    name="website"
                    type="text"
                    placeholder={t("website")}
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>
            <div className="flex justify-between">
                <ContactFormInput
                    name="email"
                    type="email"
                    placeholder={t("email")}
                    value={formData.email}
                    onChange={handleChange}
                />
                <ContactFormInput
                    name="phone"
                    type="text"
                    placeholder={t("phone")}
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <textarea
                name="message"
                placeholder={t("massage")}
                value={formData.message}
                onChange={handleChange}
                className="shadow-[inset_0_4px_4px_0_#8F85FF] w-full h-[147px] border-[#6C63FF] border-[1px] rounded-[25px] px-[10px] text-[16px]"
            ></textarea>

            <button
                type="submit"
                disabled={status === "loading"}
                className="shadow-[inset_0px_4px_4px_0px_#4A1498] lg:text-[16px] text-[12px] md:w-[191px] w-[148px] lg:h-[41px] h-[35px] border-[1px] border-[#4A1498] rounded-[25px] bg-[#D5D1FE] mx-auto"
            >
                {status === "loading" ? t("sending") : t("submit")}
            </button>

            {status === "error" && (
                <p className="text-red-600 text-center">{t("errorMessage")}</p>
            )}
        </form>
    );
}

function ContactFormInput({ name, type, placeholder, value, onChange }) {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="shadow-[inset_0_4px_4px_0_#8F85FF] lg:w-[374px] w-[146px] lg:h-[41px] h-[30px] border-[#6C63FF] border-[1px] rounded-[25px] px-[10px] lg:text-[16px] text-[14px] resize-none"
        />
    );
}
