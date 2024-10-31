'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function GreenEnergy() {
  const { t } = useTranslation();

  // Define buttonData con las keys de traducción en lugar de textos directos
  const buttonData = {
    button1: {
      info: [
        t('safInfo1'),
        t('safInfo2'),
        t('safInfo3'),
        t('safInfo4'),
      ],
      image: '/Saf.svg',
      activeImage: '/safGreen.svg',
    },
    button2: {
      info: [
        t('ammoniaInfo1'),
        t('ammoniaInfo2'),
        t('ammoniaInfo3'),
        t('ammoniaInfo4'),
      ],
      image: '/GreenAmmonia2.svg',
      activeImage: '/safGreen.svg',
    },
  };

  const [activeButton, setActiveButton] = useState('button1');
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const currentButtonData = buttonData[activeButton];

  return (
    <div className="w-full bg-[#EDEDED] min-h-screen flex flex-col items-center">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4 w-full max-w-[1218px] px-4">
            {Object.keys(buttonData).map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                onMouseEnter={() => setHoveredButton(button)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`h-[78px] flex items-center justify-center rounded-[8px] transition-colors duration-300 w-full ${
                  activeButton === button
                    ? 'bg-[#101820] text-white'
                    : 'bg-[#D9D8D6] text-[#76777A] hover:bg-[#76777A] hover:text-white'
                }`}
              >
                <Image
                  src={
                    activeButton === button
                      ? currentButtonData.activeImage
                      : hoveredButton === button
                      ? '/arrow-down-leftHover.svg'
                      : '/arrow-down-left.svg'
                  }
                  alt={`Icono ${button}`}
                  height={24}
                  width={23}
                  className="mr-2"
                />
                {button === 'button1' ? "SAF" : t('buttonGreenAmmonia')}
              </button>
            ))}
          </div>

          {/* Caja de contenido */}
          <div className="w-full max-w-[1218px] rounded-tl-[8px] rounded-[8px] overflow-hidden shadow-lg mb-4">
            <div className="bg-white p-4 flex flex-col justify-around items-center min-h-[1098px] md:min-h-[746px] lg:min-h-[510px]">
              {currentButtonData.info.map((text, index) => (
                <p key={index} className="text-lg text-justify font-archivo max-w-[1090px] w-full">
                  {activeButton === 'button1' && index === 0 ? (
                    <strong className="font-medium text-[34px] font-archivo">{text}</strong>
                  ) : activeButton === 'button2' && index === 1 ? (
                    <strong className="font-medium text-[34px] font-archivo">{text}</strong>
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
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

