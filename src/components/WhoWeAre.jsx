import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function WhoWeAre() {
    const { t } = useTranslation();
    return (
        <div id='SustainableFuels' className="h-screen md:h-[760px] justify-end flex items-center w-full bg-[#101820] ">
            <div  className="h-[550px] flex flex-col justify-between text-[white]" >
                <div className="h-[100px] ">
                    <h3 className="text-[#57B6B2] text-[80px]">{t('WhoWeAreTitle')}</h3>
                </div>
                <div className="w-full flex justify-end ">
                    <div className="flex w-[1330px] justify-between ">
                        <div className="w-[557px] flex flex-col justify-around text-[24px] font-extralight leading-8 tracking-tight text-left">
                            <p>
                                {t('WhoWeAreP')}<strong className="font-bold text-[28px]">{t('WhoWeArePstrong')}</strong>
                            </p>
                            <br />
                            <p>
                            {t('WhoWeArePsecond')}
                            </p>
                            <br />
                            <p>
                                {t('WhoWeArePThird')}<strong className="font-bold text-[28px]"> {t('WhoWeArePThirdStrong')}</strong> 
                            </p>
                        </div>
                        <div>
                            <Image 
                                src="/WhoWeAre.svg"
                                alt="Imagen"
                                width={693}
                                height={393}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
