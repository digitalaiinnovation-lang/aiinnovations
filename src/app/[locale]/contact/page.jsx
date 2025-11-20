import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react"
import ContactForm from "@/components/ContactForm";
export const runtime = 'edge';

export const metadata = {
    title: "Contacts | AI Innovations"
};


export default function Contact({ params }) {
    const { locale } = use(params);

    setRequestLocale(locale);

    const formT = useTranslations("ContactForm");
    const contactsT = useTranslations("Contacts");

    return (
        <main className="bg-white text-black flex md:flex-row flex-col pt-[164px] items-center justify-center gap-[50px]">
            <section className="text-center">
                <h2 className="font-anonymous md:text-[32px] text-[20px]">{formT('heading')}</h2>
                <ContactForm inquiryType="Контакт" />
            </section>
            <section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d184.07311533385223!2d25.624849868500096!3d42.42411951243004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1761578823544!5m2!1sen!2sbg"
                    className="h-[236px] w-[329px] mt-[32px] md:mb-[100px] mb-[16px] md:hidden" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


                <h2 className="font-anonymous md:text-[32px] text-20px md:mb-[32px] mb-[16px]">{contactsT('heading')}</h2>
                <div className="flex flex-col gap-[10px] font-alkalami md:text-[20px] md:mb-0 mb-[24px] text-[15px]">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center p-[4px]" aria-hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z" />
                            </svg>
                        </span>
                        <span className="text-bold">{contactsT("phone")}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center p-[4px]" aria-hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 21 21" aria-hidden>
                                <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)">
                                    <path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05z" />
                                    <circle cx="6.5" cy="6.5" r="2.5" />
                                </g>
                            </svg>
                        </span>
                        <span>{contactsT("address")}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center" aria-hidden>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20" aria-hidden>
                                <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                                    <path d="M17 4H3a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 17 4ZM3.5 15V5h13v10h-13Z" />
                                    <path d="m17.324 4.88l-7.045 6a.5.5 0 0 1-.65-.001l-6.956-6A.5.5 0 0 1 3 4h14a.5.5 0 0 1 .324.88ZM15.642 5H4.345l5.612 4.841L15.642 5Z" />
                                </g>
                            </svg>
                        </span>
                        <span className="text-bold">{contactsT("email")}</span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d184.07311533385223!2d25.624849868500096!3d42.42411951243004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1761578823544!5m2!1sen!2sbg"
                    className="h-[445px] w-[387px] mt-[32px] mb-[100px] hidden md:block" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </main>
    )
}