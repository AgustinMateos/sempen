import './globals.css';
import { Archivo } from 'next/font/google';
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';
import Head from 'next/head';

const archivo = Archivo({ subsets: ['latin'] });

const metadata = {
  title: 'Sempen',
  description: 'Fueling the future',
  keywords: {
    en: 'combustible sostenible de aviaciön, SAF, prima verde, sempen, plan de vuelo verde',
    es: 'sustainable aviation fuels, SAF, green premium, flight plan green, sempen',
    pt: 'plano de voo verde, sempen, saf, prêmio verde, combustíveis de aviação sustentáveis',
  },
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  const keywords = metadata.keywords[locale] || metadata.keywords.en;

  return (
    <html lang={locale} dir={dir(locale)}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}
