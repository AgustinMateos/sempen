import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen overflow-hidden">
            <div className="h-[140px] w-full bg-[#101820] flex justify-end items-end">
                <h3 className="text-[#57B6B2] text-[80px]">About Us</h3>
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
                    <h4>{t('AboutUsTitle')}</h4>
                </div>
                <div className="flex flex-col items-center text-[#FFFFFF] text-[26px]">
                    <div className="flex items-center justify-center mb-4">
                        <Image src="/whatwedoicon.svg" alt="What we do icon" width={61} height={61} quality={100} />
                        <p className="w-[506px] ml-2">{t('AboutUsTextWeDevelop')}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src="/ourgoalicon.svg" alt="Our goal icon" width={61} height={61} quality={100} />
                        <p className="w-[506px] ml-2">{t('AboutUsTextOurGoals')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
