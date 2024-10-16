'use client' 
import Image from 'next/image';
import { useTranslation } from "react-i18next";
export default function HowWeDoIt() {
  const {t}=useTranslation();
  return (
    <div  className="relative w-full h-screen max-h-[826px] bg-[#101820] flex justify-center items-center">
      <div className="text-white text-left px-8 max-h-[507px] w-[598px]">
        <h4 className="text-[32px] mb-4">{t('HowWeDoItTitle')}</h4>
        <h5 className="text-[24px] mb-6">
        {t('HowWeDoItTextPOne')}
        </h5>
        <p className="text-[18px] leading-relaxed">
        {t('HowWeDoItTextPTwo')}<span>  {t('HowWeDoItTextPTwoSpan')}</span>
          <br /><br />
          {t('HowWeDoItTextPThree')} <span>{t('HowWeDoItTextPThreeSpan')}</span>
          <br /><br />
         {t('HowWeDoItTextPFour')} </p>
      </div>
      <div
        className="max-w-[661px] w-full h-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/HowWeDoIt.svg')" }}
      >
        <div className="h-[440px] w-[450px] flex justify-center flex-col space-y-4">
          <div className="flex justify-center">
            <Image src="/howWeDoItImgMap1.svg" alt="Imagen 1" width={88} height={49} />
          </div>
          <div className="flex justify-center">
            <Image src="/howWeDoIt2.svg" style={{ transform: 'translateX(220px)' }} alt="Imagen 2" width={137} height={89} />
          </div>
          <div className="flex justify-center">
            <Image src="/howWeDoItImgMap5.svg" alt="Imagen 3" width={203} height={139} />
          </div>
          <div className="flex justify-center">
            <Image src="/howWeDoIt4.svg" alt="Imagen 3" style={{ transform: 'translateX(240px)' }} width={163} height={104} />
          </div>
          <div className="flex justify-center">
            <Image src="/howWeDoIt5.svg" alt="Imagen 4" width={94} height={51} />
          </div>
        </div>
      </div>
    </div>
  );
}
