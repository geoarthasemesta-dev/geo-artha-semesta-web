import "react-i18next";
import common from "../locales/en/common.json";

interface I18nNamespaces {
  common: typeof common;
}

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: I18nNamespaces;
  }
}
