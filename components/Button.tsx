"use client";

import { ArrowDown } from "lucide-react";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <ArrowDown className="size-6" />
        </div>
      </div>
    </a>
  );
};

export default Button;
