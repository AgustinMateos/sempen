import './globals.css';
import { Archivo } from 'next/font/google';
import { dir } from 'i18next';
import Head from 'next/head';

const archivo = Archivo({ subsets: ['latin'] });

// Definir metadata globalmente, ya que lo necesitas en generateMetadata y en el componente
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

export async function generateMetadata({ params: { locale } }) {
  const description = metadata.description[locale] || metadata.description.en;
  const keywords = metadata.keywords[locale] || metadata.keywords.en;

  return {
    title: metadata.title,
    description: description,
    keywords: keywords,
  };
}

export default function RootLayout({ children, params: { locale } }) {
  // Obtener la descripción y las keywords para la página actual
  const description = metadata.description[locale] || metadata.description.en;
  const keywords = metadata.keywords[locale] || metadata.keywords.en;

  // Definir la URL canónica para cada idioma
  const canonicalUrl = `https://sempen.com/${locale}`;

  return (
    <html lang={locale} dir={dir(locale)}>
      <Head>
        {/* Meta para robots */}
        <meta name="robots" content="index, follow" />

        {/* Etiquetas meta para SEO */}
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://sempen.com/images/imagen.jpg" />

        {/* Etiqueta Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Título de la página */}
        <title>{metadata.title}</title>
      </Head>
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}
