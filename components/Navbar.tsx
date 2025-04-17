"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";
import Link from "next/link";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      // create an event listener for when the user scrolls
      const handleScroll = () => {
        // check if the user has scrolled down at least 10px
        // if so, set the state to true
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
      };
  
      // add the event listener to the window
      window.addEventListener("scroll", handleScroll);
  
      // cleanup the event listener when the component is unmounted
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <Link href="/" className="logo">
            AbrahamNhier
            </Link>

            <nav className="desktop">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name} className="group">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Link href="/contacts" className="contact-btn group">
                <div className="inner">
                    <span>Contact Me</span>
                </div>
            </Link>
        </div>
    </header>
  );
};

export default Navbar;
