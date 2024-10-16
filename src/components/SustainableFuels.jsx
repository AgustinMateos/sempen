import Image from "next/image";
import GreenEnergy from "./GreenEnergy";

export default function WhoWeAre() {
    return (
        <div className="h-screen md:h-[760px]   w-full bg-[#EDEDED] ">
            <div className="w-full flex justify-end h-[319px] ">
                <div  >
                <h4 className="text-[#57B6B2] w-[1330px] text-[80px]">Sustainable Fuels</h4>
                <p className="font-normal w-[1117px] text-[38px] ">
                We pioneer the production of renewable fuels to ensure a future with sustainable mobility
              </p>

            </div>
            </div>
            
            <div className="flex items-center bg-[#EDEDED]">
                 <div id='SustainableFuels' className="h-[486px] flex flex-col justify-between text-[#101820]" >
                <div className="w-full flex justify-end ">
                    <div className="flex w-[1330px] justify-between items-center ">
                    <div>
                            <Image 
                                src="/sustainableFuels.svg"
                                alt="Imagen"
                                width={693}
                                height={393}
                            />
                        </div>
                        <div className="w-[557px] flex  flex-col justify-around text-[24px] font-extralight leading-8 tracking-tight text-left">
                            <p>
                            We are committed to ensuring no additional CO2 is added to our atmosphere. This is achievable. Sustainable fuels are the key to reducing emissions while allowing humanity to thrive in harmony with nature
                            </p>
                            <br />
                            <p>
                            Our goal is to produce drop-in fuels, which are chemically identical to the fuels used today. This allows for a reduction in emissions while utilizing the existing infrastructure, including planes, ships, logistics systems, and end users.
                            </p>
                            <br />
                            
                        </div>
                       
                    </div>
                </div>
                
            </div>
            
            
            </div>
            {/* {<div className="w-full bg-[#EDEDED] h-[1171px] ">
                <div className=" flex justify-center"> </div>
            </div>} */}
         
        </div>
    );
}





















// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function AboutUs() {
//     const [isVisible, setIsVisible] = useState(false);

//     // Manejar el efecto de scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollY = window.scrollY; // Altura de scroll actual
//             const triggerHeight = window.innerHeight * 0.6; // Define cuándo aparecerá la imagen (60% del viewport)

//             // Mostrar la imagen si se ha hecho scroll más allá de triggerHeight
//             if (scrollY > triggerHeight) {
//                 setIsVisible(true);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
        
//         // Limpieza del evento de scroll al desmontar el componente
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="min-h-screen md:min-h-[790px]">
//             <div
//                 className={`w-full bg-cover bg-center min-h-screen md:min-h-[650px] flex justify-between flex-col items-center transition-transform duration-1000 ease-out`}
//                 style={{
//                     backgroundImage: `linear-gradient(180deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.446541) 63.5%, #101820 100%), linear-gradient(0deg, rgba(16, 24, 32, 0) 41.5%, rgba(16, 24, 32, 0.446541) 64%, #101820 97%), url('/OurMissionImg.svg')`
//                 }}
//             >
//                 <div className="h-[225px] text-[#FFFFFF] w-[944px] flex items-center text-center text-[32px] leading-[40px] font-medium tracking-widest">
//                     <h4>
//                         Our mission goes beyond just creating long-term value for our shareholders; 
//                         we are committed to making a lasting, positive impact on our communities and the world.
//                     </h4>
//                 </div>

//                 {/* Imagen que aparece desde abajo */}
//                 <div className={`transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
//                     <Image
//                         src="/ourgoalicon.svg"
//                         alt="Our Goal Icon"
//                         width={200} // Ajusta el tamaño según sea necesario
//                         height={200}
//                         className="mt-8"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }}


