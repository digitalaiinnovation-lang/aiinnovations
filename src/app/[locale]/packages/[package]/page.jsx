import ContactForm from "@/components/ContactForm";
import { use } from "react"
export const runtime = 'edge';

export const metadata = {
    title: "Request Package | AI Innovations"
};


export default function PackageInquiry({ params }) {
    const currPackage = use(params).package;

    return (
        <main className="bg-white text-black flex justify-center bg-[url('/packages/package_background.png')] bg-center py-[240px] bg-cover">
            <ContactForm inquiryType={`За Пакет: ${currPackage}`} />
        </main>
    )
}