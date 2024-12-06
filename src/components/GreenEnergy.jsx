import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function GreenEnergy() {
  const { t } = useTranslation();

  const buttonData = {
    button1: {
      info: [
        t('safInfo1'),
        t('safInfo2'),
        t('safInfo3'),
        t('safInfo4'),
      ],
      image: '/Saf.webp',
      activeImage: '/safGreen.webp',
    },
    button2: {
      info: [
        t('ammoniaInfo1'),
        t('ammoniaInfo2'),
        t('ammoniaInfo3'),
        t('ammoniaInfo4'),
      ],
      image: '/GreenAmmonia2.webp',
      activeImage: '/safGreen.webp',
    },
  };

  const [activeButton, setActiveButton] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (button) => {
    const isMobileView = window.innerWidth < 640;
    if (activeButton === button && isMobileView) {
      setActiveButton(null); 
    } else {
      setActiveButton(button);
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setActiveButton('button1'); 
    }
  }, []);

  const currentButtonData = activeButton ? buttonData[activeButton] : null;

  return (
    <div className="xl:h-[160vh] 2xl:h-[130vh] 2xl:justify-center w-full bg-[#EDEDED] flex flex-col items-center xl:pt-[20px] xl:justify-center">
      <div className="flex justify-center w-[80%] md:w-[90%] sm:w-[87%] lg:w-[950px] xl:w-[80%] rounded-tl-[8px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row mt-[20px] sm:space-x-4 mb-4 w-full space-y-4 sm:space-y-0">
            {Object.keys(buttonData).map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                onMouseEnter={() => setHoveredButton(button)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`h-[78px] text-[25px]  mb-[10px] leading-[30px] flex items-center justify-center rounded-[8px] transition-colors duration-300 w-full ${
                  activeButton === button
                    ? 'bg-[#101820] text-white '
                    : 'bg-[#D9D8D6] text-[#76777A]  hover:bg-[#76777A] hover:text-white'
                }`}
              >
                <div className="flex justify-between w-full px-6">
                  <span className="text-left">{button === 'button1' ? "SAF" : t('buttonGreenAmmonia')}</span>
                  <Image
                    src={
                      activeButton === button
                        ? buttonData[button].activeImage
                        : hoveredButton === button
                        ? '/arrow-down-leftHover.webp'
                        : '/arrow-down-left.webp'
                    }
                    alt={`Icono ${button}`}
                    height={24}
                    width={23}
                    className="ml-2 object-contain"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Mostrar la información debajo del botón en pantallas pequeñas */}
          {currentButtonData && (
            <div className="h-auto rounded-[8px] overflow-hidden shadow-lg mb-4 w-full">
              <div
                className={`bg-white  pt-[20px] pb-[20px] flex flex-col justify-around items-center ${
                  activeButton === 'button1'
                    ? 'min-h-[75vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[50vh]'
                    : 'min-h-[55vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[50vh] xl:min-h-[50vh]'
                }`}
              >
                {currentButtonData.info.map((text, index) => (
                  <p key={index} className="leading-[38px] font-extralight w-[80%] md:w-[90%] lg:w-[90%] pt-[10px] pb-[10px] tracking-[-0.01em] text-[16px] md:text-[24px] font-archivo">
                    {activeButton === 'button1' && index === 0 ? (
                      <strong className="font-medium text-[16px] md:text-[24px] font-archivo leading-[38px] tracking-[-0.01em]">{text}</strong>
                    ) : activeButton === 'button2' && index === 1 ? (
                      <strong className="font-medium text-[16px] md:text-[24px] font-archivo leading-[38px] tracking-[-0.01em]">{text}</strong>
                    ) : (
                      text
                    )}
                  </p>
                ))}
              </div>
              <div className="w-full">
                <Image
                  height={303}
                  width={1218}
                  src={currentButtonData.image}
                  alt="Descripción"
                  className="object-cover w-full  "
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
