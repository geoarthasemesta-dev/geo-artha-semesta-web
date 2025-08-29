// components/TranslationProvider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";

interface TranslationContextType {
  locale: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <TranslationContext.Provider value={{ locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a TranslationProvider");
  }
  return context.locale;
}
