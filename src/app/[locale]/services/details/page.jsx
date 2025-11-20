import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CompanyInfoCardHeading from "@/components/CompanyInfoCardHeading";
export const runtime = 'edge';

export const metadata = {
  title: "Services | AI Innovations"
};


export default function ServiceDetails({ params }) {
    const { locale } = use(params);
    setRequestLocale(locale);

    const t1 = useTranslations("ServDetails1");
    const t2 = useTranslations("ServDetails2");
    const t3 = useTranslations("ServDetails3");
    const t4 = useTranslations("ServDetails4");
    const t5 = useTranslations("ServDetails5");

    return (
        <main className="bg-white text-black md:py-[50px] py-[5px]">
            <ServiceDetailsCard>
                <img src="/service-details/servdetails3.png" className="relative w-[72px] md:w-[168px] md:top-[125px] top-[160px]" />
            </ServiceDetailsCard>

            <ServiceDetailsCard id="section1">
                <div>
                    <CompanyInfoCardHeading text={t1('heading')} />
                    <p>{t1("1")}</p>
                    <p>{t1("2")}</p>
                    <p>{t1("3")}</p>
                    <p>{t1("4")}</p>
                </div>
            </ServiceDetailsCard>

            <ServiceDetailsCard id="section2">
                <div>
                    <CompanyInfoCardHeading text={t2('heading')} />
                    <p>{t2("1")}</p>
                    <p>{t2("2")}</p>
                    <p>{t2("3")}</p>
                    <p>{t2("4")}</p>
                </div>
            </ServiceDetailsCard>

            <ServiceDetailsCard id="section3">
                <img src="/service-details/servdetails2.png" className="relative w-[37px] md:w-[158px] md:top-0 top-[-100px]"/>
                <div>
                    <CompanyInfoCardHeading text={t3('heading')} />
                    <p>{t3("1")}</p>
                    <p>{t3("2")}</p>
                    <p>{t3("3")}</p>
                    <p>{t3("4")}</p>
                    <p>{t3("5")}</p>
                </div>
            </ServiceDetailsCard>

            <ServiceDetailsCard id="section4">
                <div>
                    <CompanyInfoCardHeading text={t4('heading')} />
                    <p>{t4("1")}</p>
                    <p>{t4("2")}</p>
                    <p>{t4("3")}</p>
                    <p>{t4("4")}</p>
                </div>
            </ServiceDetailsCard>

            <ServiceDetailsCard id="section5">
                <img src="/service-details/servdetails1.png" className="relative w-[65px] md:w-[213px] md:top-0 top-[100px]" />
                <div>
                    <CompanyInfoCardHeading text={t5('heading')} />
                    <p>{t5("1")}</p>
                    <p>{t5("2")}</p>
                    <p>{t5("3")}</p>
                    <p>{t5("4")}</p>
                </div>
            </ServiceDetailsCard>
        </main>
    );
}


function ServiceDetailsCard({ children, id }) {
  return (
    <div
      id={id}
      className="
        flex md:flex-row items-center justify-between min-h-[300px] my-[36px] gap-[20px] md:text-[20px] px-[20px] text-[14px]
        odd:bg-white even:bg-[#C5EEFA] even:text-right xl:px-[260px] lg:px-[25px]
      "
    >
      {children}
    </div>
  );
}
