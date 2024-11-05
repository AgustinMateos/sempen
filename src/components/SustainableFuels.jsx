import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function WhoWeAre() {
  const { t } = useTranslation();
  return (
    <div id="SustainableFuels" className="min-h-screen md:min-h-[760px] w-full bg-[#EDEDED]">
      <div className="w-full flex justify-center px-4 md:px-0">
        <div className="min-h-[350px] max-w-[1218px] 2xl:max-w-[1470px] w-full flex flex-col justify-end">
          <h4 className="text-[#57B6B2] font-archivo text-4xl md:text-[80px] h-auto mb-4">
            {t("SustainableFuelsTitle")}
          </h4>
          <p className="font-normal font-archivo text-lg md:text-[38px] mt-4 leading-[44px]">
            {t("SustainableFuelsRenewableFuels")}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#EDEDED] px-4 md:px-0 min-h-[486px] ">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#101820] gap-6 w-full max-w-[1470px] md:max-w-[1350px]">
          {/* Contenedor de la imagen alineada a la izquierda */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-start md:justify-start">
            <Image
              src="/sustainableFuels.svg"
              alt="Imagen"
              width={693}
              height={393}
              className="w-full md:w-[693px] h-auto"
            />
          </div>
          {/* Contenedor del texto a la derecha, centrado verticalmente */}
          <div className="w-full md:w-[557px] flex flex-col text-base md:text-[24px] font-extralight leading-8 tracking-tight text-left">
            <p className="font-archivo">
              {t("SustainableFuelsNature")}
            </p>
            <br />
            <p className="font-archivo">
              {t("SustainableFuelsDropInFuels")}
            </p>
          </div>
        </div>
      </div>
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


