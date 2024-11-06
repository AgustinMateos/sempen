import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const titleRef = useRef([]);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      name: t("projectGrossoName"),
      location: t("projectGrossoLocation"),
      status: t("projectGrossoStatus"),
      description: t("projectGrossoDescription"),
      image: "/grosso.webp",
    },
    {
      id: 2,
      name: t("projectAtlanticaName"),
      location: t("projectAtlanticaLocation"),
      status: t("projectAtlanticaStatus"),
      description: t("projectAtlanticaDescription"),
      image: "/ProjectAtlantica.webp",
    },
    {
      id: 3,
      name: t("kahirósName"),
      location: t("kahirósLocation"),
      status: t("kahirósStatus"),
      description: t("kahirósDescription"),
      image: "/kahiros.webp",
    },
    {
      id: 4,
      name: t("h24uName"),
      location: t("h24uLocation"),
      status: t("h24uStatus"),
      description: t("h24uDescription"),
      image: "/h24u.webp",
    },
    {
      id: 5,
      name: t("projectHoleumName"),
      location: t("projectHoleumLocation"),
      status: t("projectHoleumStatus"),
      description: t("projectHoleumDescription"),
      image: "/projectHoleum.webp",
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-[#EDEDED] py-10" ref={projectsRef}>
      <div className="w-full flex justify-center">
  <div className="w-full max-w-[1218px] flex items-end px-4 md:px-0">
    <h3 className="text-[#57B6B2] font-archivo text-[40px] md:text-[60px] lg:text-[80px] border-b-[2px] border-transparent flex flex-wrap">
      {t("projectsTitle").split("").map((letter, index) => (
        <span
          key={index}
          ref={(el) => (titleRef.current[index] = el)}
          style={{
            display: 'inline-block', // Ajusta el ancho automáticamente
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(100%)',
            margin: letter === " " ? "0 10px" : "0 2px",
            transition: `opacity 0.5s ease ${index * 50}ms, transform 0.5s ease ${index * 50}ms`
          }}
        >
          {letter}
        </span>
      ))}
    </h3>

    {/* Línea de borde con gradiente */}
    <div
      className="flex-1 h-0 border-t-[2px] mt-[4px] md:mb-[25px]"
      style={{
        borderImageSource: 'linear-gradient(90deg, #57B6B2 45.5%, #101820 100%)',
        borderImageSlice: 1,
      }}
    />
  </div>
</div>

      {/* Mapeo de los proyectos */}
      <div className="max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-[8px] relative group mb-8 w-full lg:w-[1218px] min-h-[700px] md:min-h-[500px] lg:min-h-[300px] overflow-hidden"
          >
            {/* Imagen con gradiente */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
              style={{
                backgroundImage: `linear-gradient(270deg, rgba(16, 24, 32, 0) 0%, rgba(16, 24, 32, 0.64) 58.4%, rgba(16, 24, 32, 0.8) 100%), url('${project.image}')`,
              }}
            ></div>

            {/* Información del proyecto */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 text-white">
              <div className="flex items-center">
                <Image
                  width={48}
                  height={48}
                  src="/angle-double-right.svg"
                  alt="Right Arrow Icon"
                />
                <h4 className="text-white ml-2 font-archivo">{project.name}</h4>
              </div>
              <div className="flex justify-between text-sm md:text-base w-full lg:w-[542px]">
                <p className="mr-4 font-archivo">
                  {t("projectLocation")}: {project.location}
                </p>
                <p className="text-left lg:w-[300px] font-archivo">
                  {t("projectStatus")}: {project.status}
                </p>
              </div>
            </div>

            {/* Descripción que aparece al hacer hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(16,24,32,0.7)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base md:text-lg px-4 lg:px-0 w-[90%] lg:w-[80%] font-archivo">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}