import './globals.css';
import { Archivo } from 'next/font/google';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import Head from 'next/head';

const archivo = Archivo({ subsets: ['latin'] });

export async function generateMetadata({ params: { locale } }) {
  const metadata = {
    title: 'Sempen',
    description: {
      en: 'Fueling the future',
      es: 'Impulsando el futuro',
      pt: 'Impulsionando o futuro',
    },
    keywords: {
      en: 'sustainable aviation fuels, SAF, green premium, flight plan green, sempen',
      es: 'combustible sostenible de aviación, SAF, prima verde, sempen, plan de vuelo verde',
      pt: 'plano de voo verde, sempen, saf, prêmio verde, combustíveis de aviação sustentáveis',
    },
  };

  const description = metadata.description[locale] || metadata.description.en;
  const keywords = metadata.keywords[locale] || metadata.keywords.en;

  return {
    title: metadata.title,
    description: description,
    keywords: keywords,
  };
}

export default function RootLayout({ children, params: { locale } }) {
  const metadata = generateMetadata({ params: { locale } });

  return (
    <html lang={locale} dir={dir(locale)}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Otras etiquetas meta importantes */}
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`https://sempen.com/${locale}`} />
      </Head>
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}
