import Image from "next/image";

export default function Projects() {
  // Array de proyectos
  const projects = [
    {
      id: 1,
      name: "Projecto Grosso",
      location: "Brazil",
      status: "Pre-Feasibility Executed",
      description: "Project Grosso represents a bold leap forward in the future of aviation, spearheading the shift toward a more sustainable industry. As the most advanced eSAF project in Latin America, it places Sempen at the forefront of innovation, leading the way in sustainable fuel production. By harnessing a 200 MW electrolyzer and sourcing CO2 from concentrated biogenic sources, the project not only ensures compliance with stringent European mandates but also sets a new standard for efficiency and environmental stewardship. Strategically situated in Brazil, close to its CO2 source, Project Grosso significantly reduces capture costs and maximizes sustainability, paving the way for a cleaner, greener aviation industry.",
      image: "/ProjectGrosso.png"
    },
    {
      id: 2,
      name: "Project Atlantica",
      location: "Brazil",
      status: "Pre-Feasibility Undergoing",
      description: "Project Atlantica is a transformative step toward a sustainable future, producing green ammonia—a versatile solution with wide-reaching applications as a maritime fuel, fertilizer, and energy carrier. Structured in three dynamic stages, the project begins with a 200 MW electrolyzer and expands to a remarkable 1000 MW in its final phase. By unlocking the immense potential of green ammonia, Project Atlantica sets new benchmarks for sustainability across diverse industries, fueling progress toward a cleaner and more resilient world.",
      image: "/ProjectAtlantica.webp"
    },
    {
      id: 3,
      name: "Kahirós",
      location: "Uruguay",
      status: "FID Achieved",
      description: "Uruguay's Kahiros green hydrogen pilot marks a pivotal step in sustainable transport, featuring a 2 MW electrolyzer that produces green hydrogen to fuel a fleet of fuel cell electric vehicles (FCEVs) transporting wood for cellulose production. Powered by a dedicated 5 MW solar plant, the project demonstrates a closed-loop system that integrates clean energy with zero-emission transport, showcasing the potential for a self-sufficient and sustainable future.",
      image: "/kahiros.webp"
    },
    {
        id: 4,
        name: "H24U",
        location: "Uruguay",
        status: "Under Feasability",
        description: "As part of Uruguay's Power to Mobility program, Project H24U pioneers the supply of renewable hydrogen for fuel cell electric vehicles in forestry transport, fueling the future of cellulose production. With a 2.6 MW electrolyzer powered by grid energy, the project underscores a deep commitment to sustainable transportation solutions, driving innovation in clean energy and logistics for a greener tomorrow.",
        image: "/h24u.webp"
      },
      {
        id: 5,
        name: "Project Holeum",
        location: "Uruguay",
        status: "Conceptual Engineering executed",
        description: "Project Holeum is dedicated to the production of sustainable aviation fuel (SAF) as its primary goal, utilizing the hydroprocessed esters and fatty acids (HEFA) pathway. By processing residues like rapeseed oil, used cooking oil, and animal fats, the project also produces renewable diesel as a byproduct. Designed to drive the decarbonization of aviation, Project Holeum adds value to waste materials by transforming them into critical components for sustainable fuel production, reinforcing the circular economy and supporting a cleaner transportation future.",
        image: "/projectHoleum.webp"
      },
  ];

  return (
    <div className="h-screen md:h-[2127px] w-full bg-[#EDEDED]">
      <div className="w-full flex justify-end h-[319px]">
        <div>
          <h4 className="text-[#57B6B2] w-[1330px] text-[80px]">Our Projects</h4>
          <div className="w-full">
            {projects.map((project) => (
              <div key={project.id} className="relative group flex mb-8">
                {/* Contenedor para la imagen con gradiente */}
                <div
                  className="w-[1218px] h-[300px] bg-cover bg-center transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(270deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.64) 58.4%, rgba(16, 24, 32, 0.8) 100%), url('${project.image}')`
                  }}
                ></div>

                {/* Título e icono siempre visibles */}
                <div className="absolute top-0 left-0 h-full flex flex-col justify-between p-4 ml-10 z-10">
                  <div className="flex items-center w-[1146px]">
                    <Image width={48} height={48} src="/angle-double-right.svg" className="text-white group-hover:text-white" />
                    <h4 className="text-white ml-2 group-hover:text-white">{project.name}</h4>
                  </div>
                  <div className="w-[527px] flex justify-between text-white">
                    <p className="group-hover:text-white">Location: {project.location}</p>
                    <p className="group-hover:text-white">Status: {project.status}</p>
                  </div>
                </div>

                {/* Div que aparece al hacer hover */}
                <div className="absolute w-[1218px] inset-0 flex items-center justify-center bg-[rgba(16,24,32,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white w-[1100px] text-xl">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
