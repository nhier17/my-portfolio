import  Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs"
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import { FaGithub,FaHiking } from "react-icons/fa"
import { SiNetflix, SiYoutubegaming } from "react-icons/si"
import { MdAddShoppingCart, MdExtension } from "react-icons/md"
import { GiKnifeFork } from "react-icons/gi";
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
import web6 from "../public/delicioud.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" : ""}> 
      <Head>
<title>Abraham Nhier Portfolio</title>

      </Head>
    <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900" > 
      <section className="min-h-screen">
<nav className="py-10 mb-12 flex justify-between">
  <h1 className="text-xl font-burtons">Abraham Nhier</h1>
  <ul className="flex items-center">
    <li>
      <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
    </li>
    <li>
      <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://www.linkedin.com/in/abraham-nhier-369308291/" target="_blank">Resume</a>
      </li>
  </ul>
</nav>
<div className="text-center p-10  dark:bg-white">
  <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Abraham Nhier</h2>
  <h3 className="text-2xl py-2 md:text-3xl">Developer and designer.</h3>
  <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
  I am a software developer passionate about coding and problem solving with a solid foundation in both front-end and back-end technologies.
So far I've developed responsive and intuitive user interfaces  using technologies and libraries like Javascript, ReactJs, HTML and CSS. 
I have designed and developed restful APIs with Node.js and integrating them with diverse databases like MongoDB. 
My experience with version control systems i.e Git ensures smooth collaboration and effective code management.
 I am open  to learning and staying updated on the latest industry trends which will allow me to incorporate cutting edge solutions into my work. Looking forward to contribute to innovative projects and collaborate with like-minded individuals.
  </p>
</div>
<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
<a href="https://github.com/nhier17" target="_blank"><FaGithub /></a>
<a href="https://www.linkedin.com/in/abraham-nhier-369308291/" target="_blank"><AiFillLinkedin /></a>
<AiFillYoutube />
</div>
<div className="relative bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
<Image src={deved} alt="image" layout="fill" objectFit="cover" />
</div>
      </section>

      <section>
        <div>

            <div className="lg:flex gap-10 dark:bg-white">
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={design} alt="design" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Coding And Programming</h3>
                <p className="py-2">
                Creating  applications and elegant website designs suited for your needs .
                </p>
               
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={code} alt="code" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Code your dream project</h3>
                <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
                </p>
               
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={consulting} alt="contacts" width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">Contact Information</h3>
                <p className="text-gray-800 py-1">Email: abrahamnhier97@gmail.com</p>
                <p className="text-gray-800 py-1">Phone: +254716903151</p>
                <a href="https://www.linkedin.com/in/abraham-nhier-369308291/" target="_blank" className="text-gray-800 py-1">Visit my linkedin</a>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-2xl py-2">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a
              developer, I've worked on different 
              <span className="text-teal-500"> projects </span>
              using different <span className="text-teal-500">technologies. </span>
                        </p>
            <p className="text-md py-2 leading-8 text-gray-800">
            
              Below  are examples of projects i've worked on so far.
            </p>
            <h4 className="py-4 text-teal-600">Technology Used</h4>
                <p className="text-gray-800 py-1">ReactJs</p>
                <p className="text-gray-800 py-1">Javascript</p>
                <p className="text-gray-800 py-1">HTML and CSS</p>
                <h4 className="py-4 text-teal-600">Framework Used</h4>
                <p className="text-gray-800 py-1">Git</p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
        <a href="https://games-tracker-17.netlify.app" target="_blank" className="flex py-4 text-teal-600"><SiYoutubegaming className="text-2xl text-blue-600"/>Games Tracker</a>
        <p className="text-gray-800 py-1">
          A React application that lets you keep track of different games on different platforms. The games are fetched using rawg io api which updates regularly .
        </p>
          <Image src={web1} alt="web" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
        <a href="https://happy-trayls.netlify.app" target="_blank" className="flex py-4 text-teal-600"><FaHiking className="text-2xl"/>Happy trayls</a>
        <p className="text-gray-800 py-1">
        Happy trails is a landing web page for hikers and nature lovers. The user has access to our hiking adventures and information about varios hiking destinations. 
        </p>
        <Image src={web2} alt="title" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
        <a href="https://netflixstreams-clone.netlify.app" target="_blank" className="flex py-4 text-teal-600"><SiNetflix className="text-2xl text-red-800"/>Movie Database</a>
        <p className="text-gray-800 py-1">
        A reactjs application that gives the user access to movies and tv shows fetched using API from themdb.com. My inspiration was trying to create a netflix clone.
        </p>
        <Image src={web3} alt="title" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
        <a href="https://shopping-cart-17.netlify.app" target="_blank" className="flex py-4 text-teal-600"><MdAddShoppingCart className="text-2xl text-black"/>Shopping Cart</a>
        <p className="text-gray-800 py-1">
        It,s a web app that lets you add and checkout items on your shopping list while shopping.
        </p>
        <Image src={web4} alt="title" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
        <a href="https://leads-tracker-17.netlify.app" target="_blank" className="flex py-4 text-teal-600"><MdExtension className="text-2xl text-black"/>Leads Tracker</a>
        <p className="text-gray-800 py-1">
        A chrome extension called . Based on the design, users can save tabs and links using this extension by simply clicking save tabs or simply typing the url , and can also delete the saved links.
        </p>
          <Image src={web5} alt="title" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        <div className="basis-1/3 flex-1">
        <a href="https://delicious-delicacies-17.netlify.app" target="_blank" className="flex py-4 text-teal-600"><GiKnifeFork className="text-2xl text-black"/>Delicious Delicacies</a>
        <p className="text-gray-800 py-1">
        A react application for all good food lovers that lets the user have access to a wide range of recipes fetched using spoonacular API that updates regularly.
        </p>
          <Image src={web6} alt="title" className="rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
        </div>
        </div>
      </section>
    </main>
        </div>
  )
}
