import Image from "next/image";

export default function GreenHydrogen() {
  return (
    <div className="flex w-[1440px] bg-[#101820]  h-[537px] items-center justify-center">
      <div className="w-[816px] p-8 text-[#EDEDED] flex flex-col justify-center items-start">
        <h4 className="text-2xl font-bold mb-4">Green Hydrogen</h4>
        <p className="w-[556px]">
          <span>
            Renewable power, combined with water, brings life to the green version of this sustainable molecule.
          </span>
          <br />
          Green hydrogen can be used on its own or as a building block for molecules like SAF and green ammonia. These drop-in fuels enable the transportation of wind and solar energy, converting them from geographically bound resources into internationally traded commodities, ushering in a new dawn for energy markets.
        </p>
      </div>
      <div className="w-[624px]">
        <Image src="/GreenHydrogen.svg" width={624} height={537} alt="Green Hydrogen" />
      </div>
    </div>
  );
}
