import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const redes = [
    // {
    //   id: 1,
    //   name: "facebook",
    //   image: "/facebookSempen.webp",
    //   link: "https://www.facebook.com",
    // },
    {
      id: 1,
      name: "x",
      image: "/xSempen.webp",
      link: "https://x.com/Sempen_Energy",
    },
    // {
    //   id: 3,
    //   name: "instagram",
    //   image: "/instagramSempen.webp",
    //   link: "https://www.instagram.com",
    // },
    {
      id: 2,
      name: "linkedin",
      image: "/linkedinSempen.webp",
      link: "https://www.linkedin.com/company/sempen/?originalSubdomain=ar",
    },
  ];

  return (
    <div className='w-full bg-[#101820] flex justify-center items-center py-8 h-[634px] sm:h-[520px]'>
      <div className='w-full max-w-[1800px] px-4 md:px-10 min-h-[280px] xs:w-[698px]'>
   
        <div className="flex flex-col min-h-[160px] lg:flex-row items-start justify-between lg:space-x-8 space-y-8 lg:space-y-0">
          
          <div className='flex flex-col items-start text-white space-y-4 lg:w-2/3'>
            <Image src="/logoSempen.svg" alt="Logo" width={154} height={30} />
            <p className='font-archivo pb-[20px]'>{t('footerFueling')}</p>
    
            <div className='flex  flex-col xs:items-start sm:flex-row lg:flex-row lg:space-x-4 gap-4 lg:w-[850px]'>
              <Link className='lg:w-[120px]' href={"#AboutUs"}>
                <span className="font-archivo   hover:font-bold hover:text-white">{t('navbarAboutUs')}</span>
              </Link>
              <Link className='lg:w-[120px]' href={"#WhoWeAre"}>
                <span className="font-archivo  hover:font-bold hover:text-white">{t('navbarWhoWeAre')}</span>
              </Link>
              <Link className='lg:w-[220px]' href={"#SustainableFuels"}>
                <span className="font-archivo   hover:font-bold hover:text-white">{t('navbarSustainableFuels')}</span>
              </Link>
              <Link className='lg:w-[180px]' href={"#OurProjects"}>
                <span className="font-archivo    hover:font-bold hover:text-white">{t('navbarOurProjects')}</span>
              </Link>
            </div>
          </div>
          
         
          <div className='flex flex-col items-start lg:items-end text-white lg:w-1/3'>
  <p className='font-archivo'>{t('footerInformation')}</p>
  <a 
    href="mailto:agustinrotondomateos@gmail.com?subject=Consulta desde la web&body=Hola, me gustaría recibir más información sobre sus servicios."
    className="bg-[#EDEDED] text-[#101820] px-4  py-2 mt-2 rounded font-archivo"
  >
    {t('navbarContactUs')}
  </a>
</div>

        </div>
        
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
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
