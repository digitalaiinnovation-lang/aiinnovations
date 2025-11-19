import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react"
import routes from "@/routes";

export const metadata = {
    title: "Packages | AI Innovations"
};


export default function Packages({ params }) {
    const { locale } = use(params);

    setRequestLocale(locale)

    const generalT = useTranslations("PackageGeneral");
    const startT = useTranslations("StartPackage");
    const skillT = useTranslations("SkillPackage");
    const signatureT = useTranslations("SignaturePackage");

    return (
        <main className="bg-white text-black">
            <div className="pt-[162px] md:bg-none bg-[url('/packages/package_background.png')] bg-center bg-no-repeat bg-cover">
                <h2 className="md:font-semibold md:text-[32px] text-[16px] text-center mb-[82px]">{generalT("heading")}</h2>
            </div>


            {/* Divider */}
            <img src="/background.gif" className="w-full h-[57px] object-cover block" />

            {/* Start Package */}
            <PackageInfo heading={startT("heading")} image={"/packages/package3.png"} submitText={generalT("submit")} location="/start">
                <p>{startT('desc')}</p>
                <div className="mt-[30px]">
                    <div>{generalT('including')}</div>
                    <ul className="list-disc ml-[20px]">
                        <li>{startT('1')}</li>
                        <li>{startT('2')}</li>
                        <li>{startT('3')}</li>
                        <li>{startT('4')}</li>
                        <li>{startT('5')}</li>
                        <li>{startT('6')}</li>
                    </ul>

                    <p>{startT('result')}</p>
                </div>
            </PackageInfo>

            {/* Divider */}
            <img src="/background.gif" className="w-full h-[57px] object-cover block" />

            {/* Skill Package */}
            <PackageInfo heading={skillT("heading")} image={"/packages/package2.png"} submitText={generalT("submit")} location="/skill">
                <p>{skillT('desc')}</p>
                <div className="mt-[30px]">
                    <div>{generalT('including')}</div>
                    <ul className="list-disc ml-[20px]">
                        <li>{skillT('1')}</li>
                        <li>{skillT('2')}</li>
                        <li>{skillT('3')}</li>
                        <li>{skillT('4')}</li>
                        <li>{skillT('5')}</li>
                    </ul>

                    <p>{skillT('result')}</p>
                </div>
            </PackageInfo>

            {/* Divider */}
            <img src="/background.gif" className="w-full h-[57px] object-cover block" />

            {/* Signature Package */}
            <PackageInfo heading={signatureT("heading")} image={"/packages/package1.png"} submitText={generalT("submit")} location="/signature">
                <p>{signatureT('desc')}</p>
                <div className="mt-[30px]">
                    <div>{generalT('including')}</div>
                    <ul className="list-disc ml-[20px]">
                        <li>{signatureT('1')}</li>
                        <li>{signatureT('2')}</li>
                        <li>{signatureT('3')}</li>
                        <li>{signatureT('4')}</li>
                        <li>{signatureT('5')}</li>
                    </ul>

                    <p>{signatureT('result')}</p>
                </div>
            </PackageInfo>
        </main>
    )
}

function PackageInfo({ children, heading, image, submitText, location }) {
    return (
        <section className="py-[40px] px-[20px] 2xl:px-[80px] md:bg-[url('/packages/package_background.png')] bg-center bg-no-repeat bg-cover">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <img src={image} />
                <h4 className="md:text-[32px] text-[16px] flex-1 font-abel">{heading}</h4>
                <div className="md:block hidden">
                    <SubmitButton text={submitText} location={location} />
                </div>

            </div>
            <div className="mt-[40px] md:text-[20px] text-[11px]">
                {children}
            </div>
            <div className="md:hidden flex justify-center">
                <SubmitButton text={submitText} location={location} />
            </div>
        </section>
    )
}

function SubmitButton({ text, location }) {
    return (
        <Link href={routes.packages + location} className="shadow-[inset_9px_7px_25px_0px_#8F85FF] flex items-center justify-center md:w-[247px] md:h-[65px] w-[155px] h-[28px] border-[1px] border-[#4A1498] rounded-[20px] md:text-[20px] text-[14px]">
            {text}
        </Link>
    )
}
