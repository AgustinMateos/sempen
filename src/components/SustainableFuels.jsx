import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
export default function SustainableFuels() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
    id="SustainableFuels"
    ref={sectionRef}
    className="min-h-[60vh] xl:min-h-[90vh] flex items-center md:justify-end bg-[#EDEDED] scroll-mt-[50px] sm:scroll-mt-20 xl:scroll-mt-[50px]"
  >
  
  <div className="flex flex-col justify-evenly text-[#101820] w-full">
   
    <div className="flex flex-col items-center md:items-center w-full h-[45vh] sm:h-[50vh]  md:h-[40vh] lg:h-[38vh] justify-evenly  xl:h-[38vh] 2xl:h-[30vh]">
      <div className="w-[90%] h-auto md:w-[80%] xl:w-[90%] flex items-end justify-end">
        <h4 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] xl:text-[80px] flex flex-wrap overflow-hidden leading-[50px] sm:leading-[70px]">
          {t("SustainableFuelsTitle").split(" ").map((word, index) => (
            <span
              key={index}
              ref={(el) => (titleRef.current[index] = el)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                marginRight: "20px",
                transition: `opacity 0.3s ease ${index * 30}ms, transform 0.3s ease ${index * 30}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h4>
        <div
          className="flex-1 h-0 border-t-[2px] mt-[4px] mb-[10px] md:mb-[31px] xl:mb-[5px] 2xl:mb-[10px]"
          style={{
            borderImageSource: "linear-gradient(90deg, #57B6B2 45.5%, #EDEDED00 100%)",
            borderImageSlice: 1,
          }}
        />
      </div>
      <div className="w-full flex justify-center">
        <p className="w-[90%] mb-[20px] md:w-[79%] font-normal xl:w-[88%] lg:pb-[20px] font-archivo text-[24px] md:text-[24px] lg:text-[38px] mt-4 leading-[30px]  sm:leading-[44px]">
          {t("SustainableFuelsRenewableFuels")}
        </p>
      </div>
    </div>

    
    <div className="flex flex-col xl:flex-row items-center justify-between w-full">
      <div className="w-full flex justify-start ">
      <Image
    src="/sustFuels.jpg"
    alt="Imagen"
    width={766}
    height={250}
    className="w-[95%] md:w-[88%] md:h-auto rounded-r-[10px] h-[220px] "
    loading="lazy"
    // srcSet="
    //   /_next/image?url=%2FsustFuels.jpg&amp;w=768&amp;q=75 1x,
    //   /_next/image?url=%2FsustFuels.jpg&amp;w=1280&amp;q=75 2x,
    //   /_next/image?url=%2FsustFuels.jpg&amp;w=1920&amp;q=75 3x
    // "
  />
      </div>
      <div className="flex justify-center md:w-full md:justify-end xl:justify-start">
        <div className="w-[90%] md:w-[90%] xl:w-[90%] flex flex-col justify-around leading-8 tracking-tight text-left mb-4 mt-4 lg:mb-[30px]">
          <p className="text-[16px] xl:text-[24px] font-extralight md:w-[85%] lg:w-[80%] xl:w-[100%] lg:pt-[20px]">
            {t("SustainableFuelsNature")
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className={`inline transition-opacity font-archivo ${isVisible ? "opacity-100" : "opacity-30"}`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionDuration: "0.3s",
                  }}
                >
                  {word}{" "}
                </span>
              ))}
          </p>
          <p className="font-archivo text-[16px] xl:text-[24px] font-extralight mt-4 md:w-[600px] lg:w-[80%] xl:w-[100%]">
            {t("SustainableFuelsDropInFuels")
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  className={`inline transition-opacity font-archivo ${isVisible ? "opacity-100" : "opacity-30"}`}
                  style={{
                    transitionDelay: `${(t("SustainableFuelsNature").split(" ").length + index) * 100}ms`,
                    transitionDuration: "0.3s",
                  }}
                >
                  {word}{" "}
                </span>
              ))}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}






// import Image from "next/image";
// import { useTranslation } from "react-i18next";
// import { useEffect, useRef, useState } from "react";

// export default function SustainableFuels() {
//   const { t } = useTranslation();
//   const [visible, setVisible] = useState(false);
//   const titleRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       });
//     });

//     if (titleRef.current) {
//       observer.observe(titleRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div id="SustainableFuels" className="h-auto sm:h-[130vh] md:h-[180vh] lg:h-[165vh]  w-full bg-[#EDEDED]  md:p-[0px] flex items-center  justify-center sm:justify-start flex-col ">
//       <div className="w-[100%] sm:w-full md:w-full">
//         <div className="w-full flex justify-center lg:justify-end md:px-0">
//           <div className="  2xl:max-w-[1470px] w-[90%] sm:w-[95%] md:w-[95%] lg:w-[90%] md:h-[40vh] flex flex-col justify-evenly">
//             {/* Título con animación letra por letra */}
//             <div className="w-full flex justify-center">
//               <div className="w-full  flex items-end sm:px-0 md:px-0 h-[160px] md:h-auto ">
//                 <h4

//                   ref={titleRef}
//                   className="text-[#57B6B2] font-archivo text-4xl md:text-[60px] h-auto md:leading-[3.5rem] mb-4 sm:mb-[15px]"
//                   style={{
//                     opacity: visible ? 1 : 0,
//                     transform: visible ? 'translateY(0)' : 'translateY(100%)',
//                     transition: `opacity 0.5s ease, transform 0.5s ease`,
//                   }}
//                 >
//                   {t("SustainableFuelsTitle")
//                     .split(" ")
//                     .map((word, wordIndex) => (
//                       <span
//                         key={wordIndex}
//                         style={{
//                           display: "inline-block",
//                           opacity: visible ? 1 : 0,
//                           transform: visible ? "translateY(0)" : "translateY(100%)",
//                           marginRight: "20px", // Mayor espacio entre palabras
//                           transition: `opacity 0.5s ease ${wordIndex * 100}ms, transform 0.5s ease ${wordIndex * 100}ms`,
//                         }}
//                       >
//                         {word}
//                       </span>
//                     ))}
//                 </h4>

//                 <div
//                   className="flex-1 h-0 border-t-[2px] mt-[4px] md:mb-[10px]"
//                   style={{
//                     borderImageSource: "linear-gradient(90deg, #57B6B2 45.5%, #EDEDED00 100%)",
//                     borderImageSlice: 1,
//                   }}
//                 />
//               </div></div>
//             {/* Texto sin animación */}
//             <p className="font-normal md:w-[90%]  font-archivo text-lg md:text-[24px] mt-4 leading-[44px] ">
//               {t("SustainableFuelsRenewableFuels")}
//             </p>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row  bg-[#EDEDED]  md:px-0 min-h-[406px] sm:min-h-[500px] ">
//           <div className="flex flex-col sm:flex-col md:flex-col  justify-between  text-[#101820] gap-6 w-full  ">
//             {/* Contenedor de la imagen alineada a la izquierda */}
//             <div className="flex-shrink-0 w-full  flex justify-start ">
//               <Image
//                 src="/sustainableFuels.svg"
//                 alt="Imagen"
//                 width={293}
//                 height={193}
//                 className="w-[95%] md:w-[90%] lg:w-[80%] h-auto"
//               />
//             </div>
//             {/* Contenedor del texto a la derecha, centrado verticalmente */}
//             <div className="w-full  items-center flex flex-col text-base text-[16px] md:text-[24px] font-extralight leading-8 tracking-tight text-left">
//               <div className="sm:pl-[20px] pl-[20px] md:pl-[25px] lg:flex lg:pl-[0px] lg:justify-center">
//                 <p className="font-archivo w-[92%] md:w-[88%]   lg:w-[80%]">
//                 {t("SustainableFuelsNature")}
//               </p>
//               </div>
//               <br />
//               <div className="pb-[20px] pl-[20px] sm:pl-[20px] md:pl-[25px] lg:pl-[0px] lg:flex lg:justify-center"><p className="font-archivo w-[92%]  md:w-[88%] lg:w-[80%]">
//                 {t("SustainableFuelsDropInFuels")}
//               </p></div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
