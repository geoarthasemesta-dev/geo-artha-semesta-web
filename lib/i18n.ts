// lib/i18n.ts
import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export const languages = ["en", "id"] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";
export const cookieName = "i18next";

export const getOptions = (lng = defaultLanguage, ns = "common") => {
  return {
    debug: process.env.NODE_ENV === "development",
    supportedLngs: languages,
    fallbackLng: defaultLanguage,
    lng,
    fallbackNS: "common",
    defaultNS: "common",
    ns,
    interpolation: {
      escapeValue: false,
    },
  };
};

const initI18next = async (lng: Language, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng as any, ns));
  return i18nInstance;
};

export async function useTranslation(lng: Language, ns = "common") {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}
