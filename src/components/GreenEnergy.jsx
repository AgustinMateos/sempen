'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function GreenEnergy() {
  const buttonData = {
    button1: {
      info: [
        'SAF, or Sustainable Aviation Fuel, is a drop-in fuel for the aviation industry, meaning it can be used in any commercial flight globally, enabling the rapid decarbonization of aviation.',
        'The goal is to support global transportation without adding greenhouse gases to the atmosphere. SAF can be produced from biomass, such as vegetable oils and bioethanol, or by harnessing wind, air, and sunlight. At Sempen, we do both.',
        'By combining green hydrogen with biogenic and sustainable CO2 captured from the atmosphere, we can produce eSAF, which powers planes globally with zero emissions. This is achieved through advanced chemical processes made possible by Sempen’s technological partnerships.',
        'We also produce SAF by processing biomass, including vegetable oils, animal fats, and other waste products.'
      ],
      image: '/Saf.svg',
      activeImage: '/safGreen.svg',
    },
    button2: {
      info: [
        'Ammonia is one of the most crucial molecules of the 20th century. As the most widely used fertilizer, it has enabled food production to sustain the global population and has contributed to a sustained rise in our standards of living. However, its production has traditionally been linked to significant emissions.',
        'That changes now.',
        'Green Ammonia, the sustainable version of this molecule, is produced by combining green hydrogen with nitrogen. At Sempen, we are committed to unlocking ammonia’s full potential by reducing up to 90% of the emissions associated with its production.',
        'This breakthrough paves the way for the decarbonization of hard-to-abate sectors such as agriculture, shipping, and power generation.'
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
          {/* Contenedor de los botones */}
          <div className="flex space-x-4 mb-4 w-full max-w-[1218px] px-4">
            {Object.keys(buttonData).map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                onMouseEnter={() => setHoveredButton(button)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`h-[78px] flex items-center justify-center rounded-[8px] transition-colors duration-300 w-full ${activeButton === button ? 'bg-[#101820] text-white' : 'bg-[#D9D8D6] text-[#76777A] hover:bg-[#76777A] hover:text-white'}`}
              >
                <Image
                  src={activeButton === button ? currentButtonData.activeImage : (hoveredButton === button ? '/arrow-down-leftHover.svg' : '/arrow-down-left.svg')}
                  alt={`Icono ${button}`}
                  height={24}
                  width={23}
                  className="mr-2"
                />
                {button === 'button1' ? 'SAF' : 'Green Ammonia'}
              </button>
            ))}
          </div>

          {/* Caja de contenido */}
          <div className="w-full max-w-[1218px] rounded-tl-[8px] rounded-[8px] overflow-hidden shadow-lg mb-4">
            {/* Sección del texto */}
            <div className="bg-white p-4 flex flex-col justify-around items-center">
              {currentButtonData.info.map((text, index) => (
                <p key={index} className="text-lg text-justify max-w-[1090px] w-full">
                  {activeButton === 'button1' && index === 0 ? (
                    <strong className="font-medium text-[34px]">{text}</strong>
                  ) : activeButton === 'button2' && index === 1 ? (
                    <strong className="font-medium text-[34px]">{text}</strong>
                  ) : (
                    text
                  )}
                </p>
              ))}
            </div>
            {/* Sección de la imagen */}
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
