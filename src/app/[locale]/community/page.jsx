import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CompanyInfoCardHeading from "@/components/CompanyInfoCardHeading";
export const runtime = 'edge';

export const metadata = {
  title: "Community | AI Innovations"
};


export default function Community({ params }) {
    const { locale } = use(params);
    setRequestLocale(locale);

    const t1 = useTranslations("CommunityPage1");
    const t2 = useTranslations("CommunityPage2");
    const t3 = useTranslations("CommunityPage3");
    const t4 = useTranslations("CommunityPage4");

    return (
        <main className="bg-white text-black py-[70px]">
            <CommunityDetailsCard id="section1">
                <img src="/community/community1.png" className="relative md:top-0 top-[-100px] w-[72px] md:w-[347px]" />
                <div>
                    <CompanyInfoCardHeading text={t1("heading")} />
                    <p>{t1('1')}</p>
                    <ul src="list-disc list-inside">
                        <li>{t1('2')}</li>
                        <li>{t1('3')}</li>
                        <li>{t1('4')}</li>
                    </ul>
                </div>
            </CommunityDetailsCard>
            <CommunityDetailsCard id="section2">
                <div>
                    <CompanyInfoCardHeading text={t2("heading")} />
                    <p>{t2('1')}</p>
                    <p>{t2('2')}</p>
                    <p>{t2('3')}</p>
                </div>
            </CommunityDetailsCard>
            <CommunityDetailsCard id="section3">
                <img src="/community/community2.png" className="relative md:top-0 top-[-100px] w-[72px] md:w-[350.7px]" />
                <div>
                    <CompanyInfoCardHeading text={t3("heading")} />
                    <p>{t3('1')}</p>
                    <p>{t3('2')}</p>
                    <p>{t3('3')}</p>
                </div>
            </CommunityDetailsCard>
            <CommunityDetailsCard id="section4">
                <div>
                    <CompanyInfoCardHeading text={t4("heading")} />
                    <ul className="list-disc list-inside">
                        <li>{t4('1')}</li>
                        <li>{t4('2')}</li>
                        <li>{t4('3')}</li>
                        <li>{t4('4')}</li>
                        <li>{t4('5')}</li>
                    </ul>
                </div>
            </CommunityDetailsCard>
        </main>
    )
}

function CommunityDetailsCard({ children, id }) {
    return (
        <div
            id={id}
            className="
        flex md:flex-row items-center justify-between min-h-[300px] my-[36px] gap-[20px] md:text-[20px] px-[20px] text-[14px]
        md:odd:bg-white md:even:bg-[#C5EEFA] even:bg-white odd:bg-[#C5EEFA] odd:text-right xl:px-[260px] lg:px-[25px]
      "
        >
            {children}
        </div>
    );
}