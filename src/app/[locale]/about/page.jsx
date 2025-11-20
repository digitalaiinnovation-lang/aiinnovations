import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
export const runtime = 'edge';

export const metadata = {
  title: "About | AI Innovations"
};


export default function AboutUs({ params }) {
    const { locale } = use(params);

    setRequestLocale(locale);

    const missionT = useTranslations("AboutTop");
    const whyUsT = useTranslations("AboutMiddle");
    const bottomT = useTranslations("AboutBottom");

    return (
        <main className="bg-white text-black md:text-[20px] text-[12px]">

            {/* Top: Mission */}
            <section className="flex flex-col items-center md:pt-[407px] pt-[150px] px-[25px]">
                <img src="/about/about1.png" />
                <p className="max-w-[1083px] md:mt-[64px] mt-[20] md:mb-[192px] mb-[30px]">{missionT("intro")}</p>
                <div className="lg:w-[750px] w-[80%]">
                    <SectionHeading>{missionT("heading")}</SectionHeading>
                    <ul className="list-disc">
                        <li>{missionT("1")}</li>
                        <li>{missionT("2")}</li>
                        <li>{missionT("3")}</li>
                        <li>{missionT("4")}</li>
                        <li>{missionT("5")}</li>
                        <li>{missionT("6")}</li>
                        <li>{missionT("7")}</li>
                        <li>{missionT("8")}</li>
                        <li>{missionT("9")}</li>
                    </ul>
                </div>
            </section>

            {/* Middle: Why choose us? */}
            <section className="max-w-[770px] mx-auto pt-[20px] mb-[20px] md:text-right text-left px-[20px]">
                <img src="/about/about2.png" className="md:w-[524px] w-[294px] mx-auto" />
                <div>
                    <div className="md:mb-[60px] mt-[64px] mb-[10px]">
                        <SectionHeading>{whyUsT("heading")}</SectionHeading>
                    </div>
                    <ul>
                        <li>
                            <div>{whyUsT("1")}</div>
                            <div>{whyUsT("1sub")}</div>
                        </li>
                        <li>
                            <div>{whyUsT("2")}</div>
                            <div>{whyUsT("2sub")}</div>
                        </li>
                        <li>
                            <div>{whyUsT("3")}</div>
                            <div>{whyUsT("3sub")}</div>
                        </li>
                        <li>
                            <div>{whyUsT("4")}</div>
                            <div>{whyUsT("4sub")}</div>
                        </li>
                        <li>
                            <div>{whyUsT("5")}</div>
                            <div>{whyUsT("5sub")}</div>
                        </li>
                        <li>
                            <div>{whyUsT("6")}</div>
                            <div>{whyUsT("6sub")}</div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Divider 2 */}
            <img src="/background.gif" className="w-full h-[87px] object-cover block" />

            {/* Bottom */}
            <section className="md:pt-[128px] pt-[30px] pb-[16px] px-[16px]">
                <div className="text-center md:text-[32px] md:mb-0 mb-[60px] text-[20px] md:text-black text-[#4A1498] font-thin">{bottomT("text")}</div>
                <img src="/about/aboutgraphic.png" className="relative lg:left-[1024px] 2xl:left-[1264px] left-[60%] w-[155px] md:w-[335px]" />
            </section>
        </main>
    )
}