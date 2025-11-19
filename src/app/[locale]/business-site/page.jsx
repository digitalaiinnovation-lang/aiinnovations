import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react"

export const metadata = {
  title: "Business Site | AI Innovations"
};


export default function BisinessSite({ params }) {
    const { locale } = use(params);

    setRequestLocale(locale);

    const topFirstT = useTranslations("BusinessTop1");
    const topSecondT = useTranslations("BusinessTop2");
    const bottomFirstT = useTranslations("BusinessBottom1");
    const bottomSecondT = useTranslations("BusinessBottom2");
    const bottomThirdT = useTranslations("BusinessBottom3");
    const bottomFourthT = useTranslations("BusinessBottom4");

    return (
        <main className="bg-white text-black pt-[184px] md:text-[20px] text-[12px]">
            {/* Top Section */}

            <section className="px-20px">
                <img src="/business-site.png" className="mx-auto md:w-[926px] w-[70%]" alt="Business site" />

                <div
                    className={`px-[80px] my-[64px] md:gap-[32px] gap-[4px] flex flex-col ${locale === "bg" ? "md:flex-row" : ""
                        }`}
                >
                    <div className={`text-center ${locale === "en" ? "" : "md:text-left"}`}>
                        <h3 className="font-abel text-[32px]">{topFirstT("heading")}</h3>
                        <p>{topFirstT("1")}</p>
                        <p>{topFirstT("2")}</p>
                        <p>{topFirstT("3")}</p>
                    </div>

                    <div
                        className={`${locale === "bg" ? "md:text-right text-center ml-auto mt-[120px]" : locale === "en" ? "text-center" : ""
                            }`}
                    >
                        <h3 className="font-abel text-[32px]">{topSecondT("heading")}</h3>
                        <p>{topSecondT("1")}</p>
                    </div>
                </div>
            </section>
            {/* Divider */}
            <img src="/background.gif" className="w-full h-[57px] object-cover block" />

            {/* Bottom Section */}
            <section className="py-[64px] flex flex-col gap-[42px] items-center">
                <BusinessInfoCard heading={bottomFirstT('heading')}>
                    <p>{bottomFirstT("desc")}</p>
                </BusinessInfoCard>
                <BusinessInfoCard heading={bottomSecondT('heading')}>
                    <p>{bottomSecondT("desc")}</p>
                    <ul className="list-disc ml-[20px]">
                        <li>{bottomSecondT('1')}</li>
                        <li>{bottomSecondT('2')}</li>
                        <li>{bottomSecondT('3')}</li>
                    </ul>
                    <p>{bottomSecondT("bottom")}</p>
                </BusinessInfoCard>
                <BusinessInfoCard heading={bottomThirdT('heading')}>
                    <p>{bottomThirdT("desc")}</p>
                </BusinessInfoCard>
                <BusinessInfoCard heading={bottomFourthT('heading')}>
                    <p>{bottomFourthT("desc")}</p>
                </BusinessInfoCard>
            </section>
        </main>

    )
}

function BusinessInfoCard({ heading, children }) {
    return (
        <div
            className="md:w-[1111px] md:h-[291px] w-[420px] min-h-[191px] border-[2px] border-[#4A1498] md:rounded-[100px] rounded-[40px] md:px-[64px] px-[20px]  md:py-[10px]
            shadow-[inset_0px_6px_6px_-2px_#2365FF26,inset_0px_-20px_20px_-6px_#FFFFFF66,inset_0px_-40px_30px_-8px_#6694FF80,inset_0px_-80px_60px_-30px_#144CCCDD]"
        >
            <h5 className="font-abel md:text-[32px] text-[20px] text-center text-[#00B2FF]">{heading}</h5>
            {children}
        </div>
    );
}
