'use client';

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import LanguageChangeButton from "./LanguageChangeButton";
import { Link } from "@/i18n/navigation";
import routes from "@/routes";

export default function Header() {
  const t = useTranslations("TopNav");
  const pathname = usePathname();
  const backgroundRoutes = ["/", '/login', '/signup', '/change-password'];
  const isLight = backgroundRoutes.includes(pathname);

  return (
    <header className={`w-full absolute flex flex-col md:flex-row md:items-center items-start justify-between md:px-5 px-1 z-50`}>
      {/* Left: Logo */}
      <div className="flex items-center gap-3 my-4 mg:mx-5 mx-15">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="md:w-[100px] md:h-[100px] w-[30px] h-[30px] rounded-full object-cover"
          />
        </Link>
      </div>

      <div className="flex flex-col w-full justify-between md:flex-1 mb-6">
        <div className="flex justify-end items-center 2xl:gap-32 xl:gap-20 lg:gap-16 px-3">
          {/* Center: Search Bar */}
          <div className="flex items-center md:w-[32%] w-[28%] md:h-[28px] h-[21px] bg-[#C8D5DD] rounded-full px-3 py-2 border-[#B7E5F8] border-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#8F85FF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 px-2"
            />
          </div>

          {/* Right: Navigation */}
          <nav
            className={`flex justify-between md:w-[45%] w-[68%] text-sm font-semibold lg:mr-28 mg:mr-14 mr-1 ${
              isLight ? "text-white" : "text-black"
            }`}
          >
            <TopNavLink to={routes.services}>{t("1")}</TopNavLink>
            <TopNavLink to={routes.team}>{t("2")}</TopNavLink>
            <TopNavLink to={routes.about}>{t("3")}</TopNavLink>
            <TopNavLink to={routes.packages}>{t("4")}</TopNavLink>
            <TopNavLink to={routes.business}>{t("5")}</TopNavLink>
            <TopNavLink to={routes.contact}>{t("6")}</TopNavLink>
          </nav>

          {/* Right: Language Change Icon */}
          <LanguageChangeButton isLight={isLight} />
        </div>

        <hr className="border-[#C5EEFA] border-2" />
      </div>
    </header>
  );
}

function TopNavLink({ children, to }) {
  return (
    <Link href={to} className="font-alumni xl:text-[24px] md:text-[20px] text-[16px] align-text-bottom hover:underline">
      {children}
    </Link>
  );
}
