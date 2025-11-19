import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import SectionHeading from "@/components/SectionHeading";

export const metadata = {
  title: "Services | AI Innovations"
};


export default function Services({ params }) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const topT = useTranslations("ServTop");
  const middleT = useTranslations("ServMiddle");
  const bottomT = useTranslations("ServBottom");

  return (
    <main className="bg-white text-black">

      {/* Top: General */}
      <section className="pt-[180px] pb-[60px] max-w-[1100px] mx-auto flex flex-col items-start gap-[42px] px-4">
        <img src="/services/city.png" alt="City" className="mx-auto" />

        <div className="md:text-[20px] text-[12px]">
          <SectionHeading>{topT("heading")}</SectionHeading>
          <span>{topT("desc")}</span>
          <ul className="list-disc ml-[20px]">
            <li>{topT("1")}</li>
            <li>{topT("2")}</li>
            <li>{topT("3")}</li>
            <li>{topT("4")}</li>
            <li>{topT("5")}</li>
          </ul>
        </div>
      </section>


      {/* Divider */}
      <img src="/background.gif" className="w-full h-[187px] object-cover block" />


      {/* Middle: What you get */}
      <section className="relative flex md:flex-row flex-col justify-end px-[69px]">
        <img src="/services/sergraphic3.png" alt="woman" className="relative h-[220px] 2xl:top-[230px] top-[260px] left-[0px] md:block hidden " />
        <img src="/services/sergraphic4.png" alt="cloud" className="absolute md:h-[119px] h-[67px] top-[380px] md:top-0 md:left-[1200px] transform scale-y-[-1] md:scale-y-100"/>
        <div className="relative text-right mt-[190px] mb-[120px]">
          <SectionHeading>{middleT('heading')}</SectionHeading>
          <p className="md:text-[20px] text-[12px]">{middleT("desc")}</p>
        </div>
      </section>

      {/* Divider */}
      <img src="/background.gif" className="w-full h-[327px] object-cover block" />

      {/* Bottom: IT Consulting */}
      <section className="relative 2xl:px-[200px] xl:px-[120px] px-[20px] md:text-[20px] text-[12px]">
        <img src="/services/sergraphic1.png" alt="woman" className="relative left-[900px] top-[180px] md:block hidden" />
        <div>
          <div className="md:my-[80px] my-[20px]">
            <SectionHeading>{bottomT("heading")}</SectionHeading>
          </div>
          <p>{bottomT("p1")}</p>
          <ul className="list-disc ml-[20px]">
            <li>{bottomT("li1")}</li>
            <li>{bottomT("li2")}</li>
            <li>{bottomT("li3")}</li>
            <li>{bottomT("li4")}</li>
            <li>{bottomT("li5")}</li>
            <li>{bottomT("li6")}</li>
            <li>{bottomT("li7")}</li>
          </ul>
          <p>{bottomT("p2")}</p>
        </div>
        <img src="/services/sergraphic2.png" alt="chart" className="mx-auto md:h-[528px] h-[216px] mt-[140px]" />
      </section>
    </main>
  )
}