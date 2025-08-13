import { ui, defaultLang } from "@/i18n/ui";
function formatDate(date: Date): string {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat(undefined, options).format(date);
}
function Capitalize(str: string): string {
  if (str.length === 0 || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// i18n heelperr function
function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}
function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
function DesSlice(str: string): string {
  const prev = str.substring(0, 100);
  return prev + " ...";
}
export { formatDate, Capitalize, getLangFromUrl, useTranslations, DesSlice };
