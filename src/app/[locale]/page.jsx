// app/page.js
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ClientHome from "@/components/ClientHome"; // Client Component donde se maneja el loader

const i18Namespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18Namespaces);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18Namespaces}>
      <ClientHome />
    </TranslationsProvider>
    
  );
}