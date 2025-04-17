import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
         <div className="socials">
          {socialMedia.map((info) => (
            <Link 
            key={info.id} 
            href={info.link} 
            className="icon"
            target="_blank"
            >
              <Image src={info.img} alt="icons" width={28} height={28} />
            </Link>
          ))}
        
        </div>
        
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end md:font-normal font-light">
            &copy; {new Date().getFullYear()} Abraham Nhier
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
