import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";
export const runtime = 'edge';

export const metadata = {
  title: "Team | AI Innovations"
};


export default function Team({ params }) {
    const { locale } = use(params);

    setRequestLocale(locale);

    const topT = useTranslations("TeamTop");
    const middleT = useTranslations("TeamMiddle");
    const bottomT = useTranslations("TeamBottom");

    return (
        <main className="bg-white text-black md:text-[20px] text-[12px]">

            {/* Top: General */}
            <section className="md:pt-[322px] pt-[160px] text-center md:rounded-0 rounded-[20px]">
                <SectionHeading>{topT("heading")}</SectionHeading>
                <p className="md:mt-[80px] md:mb-[65px] mt-[30px] mb-[20px] text-left mx-[30px]">{topT("desc")}</p>
                <img src="/team/team.png" alt="team" className="md:w-full w-[90%] mx-auto" />
                <div className="flex md:justify-around justify-end md:flex-row flex-col md:p-[120px] p-[30px] text-left">
                    <ul>
                        <li>{topT("1")}</li>
                        <li>{topT("2")}</li>
                        <li>{topT("3")}</li>
                        <li>{topT("4")}</li>
                    </ul>
                    <img src="/team/teamgraphic4.png" className="relative md:left-0 md:top-[120px] left-[-20px] top-[30px] w-[170px] md:w-[354px] md:h-[266px] h-[128px]" />
                </div>

                {/* Divider */}
                <img src="/background.gif" className="w-full h-[57px] object-cover block" />
            </section>

            {/* Middle: Info Collection */}
            <section className="text-left md:p-[70px] p-[25px]">
                <div className="py-[20px]">
                    <SectionHeading>{middleT("heading")}</SectionHeading>
                </div>

                <div>
                    <span>{middleT("desc")}</span>
                    <ul className="list-disc ml-[20px]">
                        <li>{middleT("1")}</li>
                        <li>{middleT("2")}</li>
                        <li>{middleT("3")}</li>
                    </ul>
                    <img src="/team/teamgraphic3.png" className="relative md:left-[1000px] md:top-[-25px] h-[69.91px] md:h-[207.88px] left-[78%]" />
                </div>
            </section>

            {/* Divider */}
            <img src="/background.gif" className="w-full h-[142px] object-cover block" />

            {/* Middle: Info Collection 2 */}
            <section className="2xl:px-[140px] xl:px-[70px] md:pt-[100px] px-[28px]">
                <p className="text-">{middleT("bottom")}</p>
                <img src="/team/teamgraphic2.png" className="relative md:left-[1000px] md:top-[-25px] md:h-[207.88px] h-[106.73px]" />
            </section>

            {/* Divider */}
            <img src="/background.gif" className="w-full h-[142px] object-cover block" />

            {/* Bottom: From idea to reality */}
            <section className="flex flex-col md:items-end items-start xl:px-[62px] 2xl:px-[150px] md:pt-[165px] pt-[20px] md:pb-[64px] pb-[15px] px-[25px]">
                <div className="text-right">
                    <SectionHeading>{bottomT("heading")}</SectionHeading>
                    <ul className="mt-[42px] list-inside leading-10 md:space-y-2">
                        <li>{bottomT("1")}</li>
                        <li>{bottomT("2")}</li>
                        <li>{bottomT("3")}</li>
                        <li>{bottomT("4")}</li>
                        <li>{bottomT("5")}</li>
                        <li>{bottomT("6")}</li>
                        <li>{bottomT("8")}</li>
                    </ul>
                </div>

                <img src="/team/teamgraphic1.png" className="md:mt-[98px] md:h-[207.88px] h-[104.44px]" />
            </section>
        </main>
    )
}