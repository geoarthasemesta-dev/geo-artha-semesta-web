"use client";

import React from "react";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./i18n";

// Cache untuk menyimpan instance i18n
const i18nInstances = new Map();

const initI18nextClient = async (lng: string, ns: string = "common") => {
  const key = `${lng}-${ns}`;

  if (i18nInstances.has(key)) {
    return i18nInstances.get(key);
  }

  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...getOptions(lng as any, ns),
      lng: lng,
    });

  i18nInstances.set(key, i18nInstance);
  return i18nInstance;
};

export function useClientTranslation(lng: string, ns: string = "common") {
  const [t, setT] = React.useState<any>(
    () => (key: string) => key.split(".").pop() || key
  );
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;

    const loadTranslation = async () => {
      try {
        setIsLoading(true);
        const i18n = await initI18nextClient(lng, ns);

        if (isMounted) {
          setT(() => i18n.getFixedT(lng, ns));
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading translations:", error);
        if (isMounted) {
          // Fallback yang menampilkan bagian terakhir dari key
          setT(() => (key: string) => key.split(".").pop() || key);
          setIsLoading(false);
        }
      }
    };

    loadTranslation();

    return () => {
      isMounted = false;
    };
  }, [lng, ns]);

  return {
    t,
    isLoading,
  };
}
