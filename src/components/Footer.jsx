import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const redes = [
    {
      id: 1,
      name: "facebook",
      image: "/facebookSempen.svg",
      link: "https://www.facebook.com", // Enlace de Facebook
    },
    {
      id: 2,
      name: "x",
      image: "/xSempen.svg",
      link: "https://www.twitter.com", // Enlace de X (Twitter)
    },
    {
      id: 3,
      name: "instagram",
      image: "/instagramSempen.svg",
      link: "https://www.instagram.com", // Enlace de Instagram
    },
    {
      id: 4,
      name: "linkedin",
      image: "/linkedinSempen.svg",
      link: "https://www.linkedin.com", // Enlace de LinkedIn
    },
  ];

  return (
    <div className='w-full bg-[#101820] flex justify-center items-center py-8 min-h-[520px]'>
      <div className='w-full max-w-[1216px] px-4 min-h-[280px] xs:w-[698px]'>
        {/* Contenedor de contenido principal */}
        <div className="flex flex-col min-h-[160px] lg:flex-row items-start justify-between lg:space-x-8 space-y-8 lg:space-y-0">
          
          {/* Sección Izquierda: Logo y Enlaces */}
          <div className='flex flex-col items-start text-white space-y-4 lg:w-2/3'>
            <Image src="/logoSempen.svg" alt="Logo" width={124} height={30} />
            <p className='font-archivo'>{t('footerFueling')}</p>
            {/* Enlaces en columna en pantallas pequeñas, en fila en pantallas grandes */}
            <div className='flex flex-col xs:items-start sm:flex-row lg:flex-row lg:space-x-4 gap-4'>
              <Link href={"#AboutUs"} className='font-archivo'>{t('navbarAboutUs')}</Link>
              <Link href={"#WhoWeAre"} className='font-archivo'>{t('navbarWhoWeAre')}</Link>
              <Link href={"#SustainableFuels"} className='font-archivo'>{t('navbarSustainableFuels')}</Link>
              <Link href={"#Projects"} className='font-archivo'>{t('navbarOurProjects')}</Link>
            </div>
          </div>
          
          {/* Sección Derecha: Contacto */}
          <div className='flex flex-col items-start lg:items-end text-white lg:w-1/3'>
            <p className='font-archivo'>{t('footerInformation')}</p>
            <button className="bg-[#EDEDED] text-[#101820] px-4 py-2 mt-2 rounded font-archivo">{t('navbarContactUs')}</button>
          </div>
        </div>
        
        {/* Sección de Copyright y Redes Sociales */}
        <div className='border-t border-[#CBD5E1] text-white mt-8 pt-4 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
          <div className='text-center lg:text-left'>
            <p className='font-archivo'>{t('footerCopy')}</p>
          </div>
          <div className='flex space-x-4'>
            {redes.map((red) => (
              <Link key={red.id} href={red.link} passHref>
                <Image
                  width={24}
                  height={24}
                  src={red.image} 
                  alt={red.name}
                  className="cursor-pointer" // Añadimos un cursor para mejorar la UX
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
