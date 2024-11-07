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