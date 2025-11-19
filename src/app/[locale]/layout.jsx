import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {routing} from '@/i18n/routing';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
 
export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  
  return (
    <html lang={locale}>
      <body className="font-anek">
        <NextIntlClientProvider locale={locale}>
          <Header locale={locale} />
          {children}
          <Footer locale={locale}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
