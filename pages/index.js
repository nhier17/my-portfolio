import  Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import Image from "next/image"
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/games.png"
import web2 from "../public/trayls.png"
import web3 from "../public/movies.png"
import web4 from "../public/cart.png"
import web5 from "../public/leads.png"
import web6 from "../public/web6.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" : ""}> 
      <Head>
<title>Abraham Nhier Portfolio</title>

      </Head>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900' > 
      <section className="min-h-screen">
<nav className='py-10 mb-12 flex justify-between'>
  <h1 className='text-xl font-burtons'>Abraham Nhier</h1>
  <ul className='flex items-center'>
    <li>
      <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
    </li>
    <li>
      <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
      </li>
  </ul>
</nav>
<div className='text-center p-10  dark:bg-white'>
  <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Abraham Nhier</h2>
  <h3 className='text-2xl py-2 md:text-3xl'>Developer and designer.</h3>
  <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Enthusiatic junior developer providing services for programming, design content needs and also ready to learn .Join me and lets get cracking!</p>
</div>
<div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
<AiFillTwitterCircle />
<AiFillLinkedin />
<AiFillYoutube />
</div>
<div className='relative bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden'>
<Image src={deved} layout='fill' objectFit='cover' />
</div>
      </section>

      <section>
        <div>
          <h3 className='text-2xl py-2'>Services I offer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
          Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
              </p>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200' >
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
            <div className='lg:flex gap-10 dark:bg-white'>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={design} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Coding And Programming</h3>
                <p className='py-2'>
                Creating  applications and elegant website designs suited for your needs following core
                design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Technology Used</h4>
                <p className='text-gray-800 py-1'>ReactJs</p>
                <p className='text-gray-800 py-1'>Javascript</p>
                <p className='text-gray-800 py-1'>HTML and CSS</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={code} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Code your dream project</h3>
                <p className='py-2'>
                Do you have an idea for your next great website? Let's make it a
                reality.
                </p>
                <h4 className='py-4 text-teal-600'>Design Tools I used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
              <div className='text-center shadow-lg p-10 rounded-xl my-10'>
                <Image src={consulting} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
                <p className='py-2'>
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
                </p>
                <h4 className='py-4 text-teal-600'>Design Tools I used</h4>
                <p className='text-gray-800 py-1'>Photoshop</p>
                <p className='text-gray-800 py-1'>Illustrator</p>
                <p className='text-gray-800 py-1'>Figma</p>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className='text-2xl py-2'>Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
            
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className='basis-1/3 flex-1'>
          <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        <div className='basis-1/3 flex-1'>
          <Image src={web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
        </div>
        </div>
      </section>
    </main>
        </div>
  )
}
