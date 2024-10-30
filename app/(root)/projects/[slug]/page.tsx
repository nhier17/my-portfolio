import React from 'react';
import { projects } from "@/data";
import { notFound } from 'next/navigation';
import { PinContainer } from "@/components/ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const ProjectDetails = ({ params }) => {
  const { slug } = params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="py-20 px-4 mt-10">
      <Link href="/projects" className="text-purple hover:underline">
        ← Back to Projects
      </Link>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
        <Link href={project.link} target="_blank">
          <PinContainer title={project.title} href={project.link}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <img src="/bg.png" alt="bgimg" />
              </div>
              <img src={project.img} alt={project.title} className="z-10 absolute bottom-0" />
            </div>

            <h2 className="font-bold text-xl">{project.title}</h2>
            <p className="text-sm text-gray-100">{project.des}</p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon-${index}`} className="p-2" />
                  </div>
                ))}
              </div>
              
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
            </div>
          </PinContainer>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
