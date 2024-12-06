"use client";

import ContactForm from "@/components/ContactForm";
import UseAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Contact = () => {
  const { alert } = UseAlert();

  return (
    <section className="c-space my-20">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="flex flex-col items-center md:items-start">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/prof.JPEG" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          <h4 className="mt-4 text-white text-2xl font-bold text-center md:text-left">
            Abraham Nhier
          </h4>
          <p className="text-white-600 text-lg text-center md:text-left">
            Full Stack Engineer
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="https://github.com/nhier17"
              target="_blank"
              className="text-white hover:text-gray-300 transition"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nhier"
              target="_blank"
              className="text-white hover:text-blue-500 transition"
            >
                <FaLinkedin size={30} />
              </Link>
            </div>
          </div>
          <div className="contact-container">
            <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here to help.
          </p>
          <ContactForm />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
