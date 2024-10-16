import Image from "next/image";
export default function AboutUs() {
    return (
        <div className="min-h-screen md:min-h-[790px]">
            <div className="h-[140px] w-full bg-[#101820] flex justify-end items-end">
                <h3 className="text-[#57B6B2] w-[1330px] text-[80px]">About Us</h3>
            </div>
            <div
                className=" w-full bg-cover bg-center min-h-screen md:min-h-[820px] flex  justify-around flex-col items-center "
                style={{
                    backgroundImage:
                        `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 63.5%, #101820 100%),
                    linear-gradient(0deg, rgba(16, 24, 32, 0) 41.5%, rgba(16, 24, 32, 0.446541) 64%, #101820 97%),
                    url('/aboutUs.svg')`
                }}
            >
                <div className="h-[225px] text-[#FFFFFF] w-[944px] flex items-center text-center text-[60px] "><h4>Our mission is to produce sustainable fuels at scale</h4></div>
                <div className="h-[150px] text-[#FFFFFF] flex  text-[26px]">
                    <div className="w-[650px] flex items-center justify-end">
                        <Image src="/whatwedoicon.svg"
                        alt="Imagen"
                        width={61}
                        height={61}
                        quality={100} /><p className="w-[506px]">We develop and build projects that produce sustainable fuels, enabling net-zero transportation and food production</p></div>
                    <div className="w-[650px] flex items-center justify-end">
                        <Image src="/ourgoalicon.svg"
                        alt="Imagen"
                        width={61}
                        height={61}
                        quality={100} /><p className="w-[506px] ">Our goal is to drive down the "green premium".</p></div>

                </div>

            </div>
        </div>
    );
}
