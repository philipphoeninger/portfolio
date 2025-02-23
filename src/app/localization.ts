import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "@assets/i18n/locale-codes.js";

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: (locale: string) => import(`../assets/i18n/locales/${locale}.ts`),
});

export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get("locale") || sourceLocale;
  await setLocale("en"); // locale
};
