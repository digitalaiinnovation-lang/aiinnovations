import CompanyInfoCard from "@/components/CompanyInfoCard";
import HomePackageCard from "@/components/HomePackageCard";
import HomeServicesCard from "@/components/HomeServicesCard";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
export const runtime = 'edge';

export const metadata = {
  title: "AI Innovations"
};


export default function Home({ params }) {
  const { locale } = use(params);


  setRequestLocale(locale);

  const headingT = useTranslations("HomeHeadings");
  const companyT = useTranslations("CompanyInfo");
  const servicesT = useTranslations("HomeServices");
  const howDoWeWorkT = useTranslations("HowDoWeWork");
  const rulesT = useTranslations("UserRules");
  const packagesT = useTranslations("HomePackagesInfo");
  const whyUsT = useTranslations("WhyUs");

  return (
    <main className="w-screen bg-white text-black flex flex-col align-baseline justify-center overflow-hidden">
      {/* Top Section */}
      <section className="relative font-alumni text-left p-5 z-20 w-full md:h-[1024px] h-[320px]">
        <img src="/background.gif" className="h-full w-full top-0 left-0 z-0 object-cover absolute" />
        <h1 className="relative z-10 md:text-[128px] text-[36px] text-white md:ml-[210px] ml-[75px] md:mt-[400px] mt-[120px] w-[180px] md:w-full"><span className="text-[#00B2FF]">{headingT("main_blue")}</span>{headingT("main_white")}</h1>
        <h2 className="relative z-10 md:text-[64px] text-[15px] text-white md:ml-[210px] ml-[75px] md:mt-[20px] md:max-w-[568px] max-w-[180px]">{headingT("subheading")}</h2>
      </section>

      {/* What is the Company? */}
      <section className="flex flex-col my-[100px] gap-[32px]">
        <div className="xl:mx-auto lg:mx-[10px]">
          <h3 className="md:text-[40px] text-[20px] mb-[32px] font-bold font-anek">{companyT('heading')}</h3>
          <p className="xl:text-[24px] lg:text-[20px] text-[13px] xl:w-[1358px] lg:w-[90%] font-anek">{companyT('desc1')}<br />{companyT('desc2')}</p>
        </div>
        <div>
          <CompanyInfoCard
            img="/compinfo01.png"
            text={companyT('1')}
          />
          <CompanyInfoCard
            img="/compinfo02.png"
            text={companyT('2')}
          />
          <CompanyInfoCard
            img="/compinfo03.png"
            text={companyT('3')}
          />
          <CompanyInfoCard
            img="/compinfo04.png"
            text={companyT('4')}
          />
          <CompanyInfoCard
            img="/compinfo05.png"
            text={companyT('5')}
          />
          <CompanyInfoCard
            img="/compinfo06.png"
            text={companyT('6')}
          />
          <CompanyInfoCard
            img="/compinfo07.png"
            text={companyT('7')}
          />
          <CompanyInfoCard
            img="/compinfo08.png"
            text={companyT('8')}
          />
        </div>
      </section>


      {/* Divider */}
      <img src="/background.gif" className="w-full md:h-[597px] h-[176px] object-cover block" />

      {/* Services Section */}
      <section className="flex flex-col gap-[2px] my-[100px] xl:ml-[144px] xl:mr-[288px] 2xl:ml-[222px] 2xl:mr-[344px] mr-[50px] ml-[50px]">
        <div className="flex justify-between">
          <HomeServicesCard>{servicesT('1')}</HomeServicesCard>
          <img src="homegraphic1.png" className="md:w-[284px] md:h-[269px] w-[122px] h-[116px]" />
        </div>
        <div className="flex md:justify-end justify-between md:my-[48px]">
          <img src="homegraphic2.png" className="relative w-[170px] h-[155px] top-[5px] md:hidden" />
          <HomeServicesCard>{servicesT('2')}</HomeServicesCard>
        </div>
        <div className="flex justify-between">
          <HomeServicesCard>{servicesT('3')}</HomeServicesCard>
          <img src="homegraphic2.png" className="mt-[40px] mr-[120px] hidden md:block" />
          <img src="homegraphic3.png" className="relative md:hidden w-[131px] h-[98px]  top-[42px] left-[-24px]" />
        </div>
        <div className="flex justify-between">
          <img src="homegraphic3.png" className="hidden md:block" />
          <img src="homegraphic5.png" className="relative md:hidden w-[109px] h-[82px] top-[30px]" />
          <HomeServicesCard>{servicesT('4')}</HomeServicesCard>
        </div>
      </section>

      {/* User Rules & How do we Work? */}
      <section className="grid grid-cols-1 md:grid-cols-2 mx-[30px] md:mx-[115px] mt-[5px] md:mt-[115px]">
        {/* Second column first on mobile */}
        <div className="order-1 md:order-2 relative">
          <div className="text-right">
            <h4 className="text-[20px] md:text-[40px] text-[#00B2FF] my-[45px] font-bold font-anek">
              {rulesT('heading')}
            </h4>
            <ul className="text-[12px] md:text-[20px] list-disc list-inside [direction:rtl]">
              <li className="[direction:ltr]">{rulesT('1')}</li>
              <li className="[direction:ltr]">{rulesT('2')}</li>
              <li className="[direction:ltr]">{rulesT('3')}</li>
              <li className="[direction:ltr]">{rulesT('4')}</li>
              <li className="[direction:ltr]">{rulesT('5')}</li>
            </ul>
          </div>
          <img src="homegraphic6.png" className="md:relative md:block 2xl:top-110 lg:top-100 left-80 hidden" />
        </div>

        {/* First column second on mobile */}
        <div className="order-2 md:order-1 md:mb-[265px]">
          <img src="homegraphic5.png" className="md:block hidden" />
          <div>
            <h4 className="text-[20px] md:text-[40px] text-[#00B2FF] my-[45px] md:my-[90px] font-bold font-anek">
              {howDoWeWorkT('heading')}
            </h4>
            <ol className="text-[12px] md:text-[20px] space-y-2">
              <li>{howDoWeWorkT('1')}<br />{howDoWeWorkT('1sub')}</li>
              <li>{howDoWeWorkT('2')}<br />{howDoWeWorkT('2sub')}</li>
              <li>{howDoWeWorkT('3')}<br />{howDoWeWorkT('3sub')}</li>
              <li>{howDoWeWorkT('4')}<br />{howDoWeWorkT('4sub')}</li>
              <li>{howDoWeWorkT('5')}<br />{howDoWeWorkT('5sub')}</li>
              <li>{howDoWeWorkT('6')}<br />{howDoWeWorkT('6sub')}</li>
            </ol>
          </div>
          <img src="homegraphic6.png" className="relative left-[300px] md:hidden w-[94px] h-[80px]" />
        </div>
      </section>

      {/* Divider 2 */}
      <img src="/background.gif" className="w-full h-[57px] object-cover block" />

      {/* Packages Section */}
      <section className="md:mb-0 mb-[10px]">
        <h4 className="md:text-[32px] text-[20px] mb-[42px] mt-[92px] text-center font-anek">{packagesT('heading')}</h4>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mx-[0px] mx-[50px]">
          <div className="flex md:flex-col md:justify-center items-center justify-between md:my-[50px] md:gap-[420px]">
            <HomePackageCard heading={packagesT('starter_heading')}>
              <li>{packagesT('starter1')}</li>
              <li>{packagesT('starter2')}</li>
              <li>{packagesT('starter3')}</li>
              <li>{packagesT('starter4')}</li>
              <li>{packagesT('starter5')}</li>
              <li>{packagesT('starter6')}</li>
            </HomePackageCard>
            <img src="homegraphic7.png" className="md:hidden w-[101px] h-[76px]" />
            <img src="homegraphic8.png" className="md:block hidden" />
          </div>


          <div className="flex md:justify-center justify-between items-center md:my-[50px]">
            <img src="homegraphic8.png" className="relative md:hidden w-[145px] h-[136px] top-[50px]" />
            <HomePackageCard heading={packagesT('skill_heading')}>
              <li>{packagesT('skill1')}</li>
              <li>{packagesT('skill2')}</li>
            </HomePackageCard>
          </div>

          <div className="flex md:flex-col justify-start items-center md:my-[50px] md:gap-[420px]">
            <img src="homegraphic7.png" className="md:block hidden" />
            <HomePackageCard heading={packagesT('signature_heading')}>
              <li>{packagesT('signature1')}</li>
              <li>{packagesT('signature2')}</li>
            </HomePackageCard>
          </div>
        </div>
      </section>


      {/* Why us? */}
      <section className="relative md:h-[411px] h-[288px] bg-[url('/background.gif')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col items-center justify-center text-white px-6">
          <h4 className="font-anek md:text-[40px] text-[20px] font-bold text-center">{whyUsT("heading")}</h4>
          <p className="md:text-[36px] text-[15px] text-center mt-4">{whyUsT("text")}</p>
        </div>
      </section>
    </main>
  );
}
