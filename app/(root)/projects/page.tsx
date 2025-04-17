"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { projects } from "@/data";
import CanvasLoader from '@/components/Loading';
import DemoComputer from '@/components/DemoComputer';
import Link from 'next/link';
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projectCount = projects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    setSelectedProjectIndex((prevIndex: number) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    })
  }

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = projects[selectedProjectIndex];

  return (
  <section className="section-padding">
    <p className="heading">A selection of my projects</p>

    <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
      <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
        <div className="absolute top-0 right-0">
          <Image 
            src={currentProject?.spottlight || ''} 
            alt="spotlight" 
            width={100} 
            height={100} 
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
          <Image 
            src={currentProject?.logo || ''} 
            alt="logo" 
            width={100} 
            height={100} 
            className="w-10 h-10 shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-5 text-white-600 my-5">
          <p className="text-white text-2xl font-semiboldanimatedText">{currentProject.title}</p>
          <p className="animatedText">{currentProject.des}</p>
          <p className="animatedText">{currentProject.subdesc}</p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-5\3">
            {currentProject.iconLists.map((icon,index) => (
              <div key={index}>
                  <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <Link 
            href={currentProject.link} 
            target="_blank"
            className="flex items-center gap-2 cursor-pointer text-white-600"
          >
            <p className="button">Check Live Site</p>
            <FaLocationArrow className="ml-2 w-3 h-3" />
          </Link>
        </div>

        <div className="flex justify-between items-center mt-7">
          <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <button className="arrow-btn" onClick={() => handleNavigation('next')}>
            <FaArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
        <Canvas>
          <ambientLight intensity={Math.PI} />
          <directionalLight position={[10, 10, 5]} />
          <Center>
            <Suspense fallback={<CanvasLoader />}>
              <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer img={currentProject.img} />
              </group>
            </Suspense>
          </Center>
          <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
        </Canvas>
      </div>
    </div>
</section>
  );
};

export default Projects;
