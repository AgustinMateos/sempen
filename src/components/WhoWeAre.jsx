import Image from "next/image";

export default function WhoWeAre() {
    return (
        <div id='SustainableFuels' className="h-screen md:h-[760px] justify-end flex items-center w-full bg-[#101820] ">
            <div  className="h-[550px] flex flex-col justify-between text-[white]" >
                <div className="h-[100px] ">
                    <h3 className="text-[#57B6B2] text-[80px]">Who we are</h3>
                </div>
                <div className="w-full flex justify-end ">
                    <div className="flex w-[1330px] justify-between ">
                        <div className="w-[557px] flex flex-col justify-around text-[24px] font-extralight leading-8 tracking-tight text-left">
                            <p>
                                We are a team of exceptional people dedicated to <strong className="font-bold text-[28px]">building a generational company that shapes the future.</strong>
                            </p>
                            <br />
                            <p>
                                Over the past decades, we’ve established and grown energy businesses across Latin America, bringing power to millions and developing GW-scale assets in Brazil, Argentina, Chile, Uruguay, Bolivia, Peru, and Mexico.
                            </p>
                            <br />
                            <p>
                                Now, we are harnessing our deep expertise to address humanity’s most pressing challenge:<strong className="font-bold text-[28px]"> achieving sustainable growth for generations to come.</strong> 
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
