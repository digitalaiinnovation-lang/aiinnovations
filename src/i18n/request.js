import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale is a promise that resolves to { requestLocale, pathname, search }
  const requested = await requestLocale;

  const locale = routing.locales.includes(requested)
    ? requested
    : routing.defaultLocale;

  return {
    messages: {
      ...(await import(`../../messages/${locale}/header.json`)).default,
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/subscribe.json`)).default,
      ...(await import(`../../messages/${locale}/footer.json`)).default,
      ...(await import(`../../messages/${locale}/services.json`)).default,
      ...(await import(`../../messages/${locale}/team.json`)).default,
      ...(await import(`../../messages/${locale}/about.json`)).default,
      ...(await import(`../../messages/${locale}/packages.json`)).default,
      ...(await import(`../../messages/${locale}/business.json`)).default,
      ...(await import(`../../messages/${locale}/contact.json`)).default,
      ...(await import(`../../messages/${locale}/community.json`)).default
    },
    locale
  };
});
