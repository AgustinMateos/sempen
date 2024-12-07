import './globals.css';
import { Archivo } from 'next/font/google';
import { dir } from 'i18next';

const archivo = Archivo({ subsets: ['latin'] });

// Definir metadata globalmente
const metadata = {
  title: {
    en: 'Sempen - Fueling the future',
    es: 'Sempen - Impulsando el futuro',
    pt: 'Sempen - Impulsionando o futuro',
  },
  description: {
    en: 'We develop and build projects that produce sustainable fuels, enabling net-zero transportation and food production.Our goal is to drive down the "green premium".',
    es: 'En Sempen desarrollamos y construimos proyectos que producen combustibles sustentables, logrando el transporte y la producción de alimentos con emisiones netas cero. Nuestro objetivo es reducir la "prima verde".',
    pt: 'Desenvolvemos e construímos projetos que produzem combustíveis sustentáveis, viabilizando emissões zero no setor de transportes e na cadeia de produção de alimentos. Nosso objetivo é reduzir o "prêmio verde".',
  },
  keywords: {
    en: 'sustainable aviation fuels, SAF, green premium, eco-friendly aviation, carbon-neutral flight, renewable jet fuel, flight plan green, Sempen, sustainable travel solutions, alternative aviation fuels, biojet fuels, aviation decarbonization',
    es: 'combustible sustentable de aviación, SAF, prima verde, aviación ecológica, vuelo carbono neutral, combustible renovable para aviones, plan de vuelo verde, Sempen, soluciones de viaje sostenible, combustibles alternativos para aviones, biocombustibles, descarbonización de la aviación',
    pt: 'combustíveis de aviação sustentáveis, SAF, prêmio verde, aviação ecológica, voo carbono neutro, combustível renovável para jatos, plano de voo verde, Sempen, soluções de viagem sustentável, combustíveis alternativos de aviação, biocombustíveis para aviação, descarbonização da aviação',
  },
};

export async function generateMetadata({ params: { locale } }) {
  return {
    title: metadata.title[locale] || metadata.title.en,
    description: metadata.description[locale] || metadata.description.en,
    keywords: metadata.keywords[locale] || metadata.keywords.en,
    openGraph: {
      title: metadata.title[locale] || metadata.title.en,
      description: metadata.description[locale] || metadata.description.en,
      url: `https://sempen.com/${locale}`,
      images: [
        {
          url: 'https://sempen.com/images/imagen.jpg',
          alt: 'Sempen image',
        },
      ],
    },
    alternates: {
      canonical: `https://sempen.com/${locale}`,
    },
  };
}

export default function RootLayout({ children, params: { locale } }) {
  const currentKeywords = metadata.keywords[locale] || metadata.keywords.en;

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <title>{metadata.title[locale] || metadata.title.en}</title>
        <meta name="description" content={metadata.description[locale] || metadata.description.en} />
        <meta name="keywords" content={currentKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title[locale] || metadata.title.en} />
        <meta property="og:description" content={metadata.description[locale] || metadata.description.en} />
        <meta property="og:image" content="https://sempen.com/images/imagen.jpg" />
        <meta property="og:url" content={`https://sempen.com/${locale}`} />
        <meta property="og:type" content="website" />
        
       
        
        {/* Favicon */}
        <link rel="icon" href="/fav2.png" type="image/png" />
       
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://sempen.com/${locale}`} />
        
       
        
        {/* Robots meta */}
        <meta name="robots" content="index, follow" />
      </head>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}