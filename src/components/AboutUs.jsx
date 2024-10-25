import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen overflow-hidden">
            <div className="h-[140px] w-full bg-[#101820] flex justify-center">
                <div className="w-[1218px] flex items-end"> {/* Alinea los elementos al borde inferior */}
                    {/* Texto "About Us" */}
                    <h3 className="text-[#57B6B2] text-[80px] w-[331px] border-b-[2px] border-transparent">
                        {t('AboutUsTitle')}
                    </h3>
                    {/* Línea con el degradado, con ajuste para estar en la misma línea pero sin superposición */}
                    <div 
                        className="flex-1 h-0 border-t-[2px] ml-4 mt-[4px]"  // mt-[4px] ajusta la distancia exacta
                        style={{
                            borderImageSource: 'linear-gradient(90deg, #005D63 45.5%, #101820 100%)',
                            borderImageSlice: 1,
                        }}
                    />
                </div>
            </div>

            <div
                className="w-full bg-cover bg-center flex flex-col items-center justify-around min-h-screen"
                style={{
                    backgroundImage: `
                        linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 63.5%, #101820 100%),
                        linear-gradient(0deg, rgba(16, 24, 32, 0) 41.5%, rgba(16, 24, 32, 0.446541) 64%, #101820 97%),
                        url('/aboutUs.svg')
                    `,
                }}
            >
                <div className="h-auto max-w-[944px] text-[#FFFFFF] flex items-center text-center text-[70px]">
                    <h4>{t('AboutUsh2')}</h4>
                </div>
                <div className="flex flex-col items-center text-[#FFFFFF] text-[3rem]">
                    <div className="flex items-center justify-center mb-4 max-w-[940px]">
                       
                        <p className=" ml-2">{t('AboutUsTextWeDevelop')}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
