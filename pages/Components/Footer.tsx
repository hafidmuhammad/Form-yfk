import React from "react";
import Image from "next/image";
import logo from "../../public/Assets/yellow-fit-kitchen-dark-logo 1.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black">
      <div className="container flex justify-center items-center">
        <div className="mb-2 items-start">
          <Image
            src={logo}
            alt="Yellowfit Logo"
            width={200}
            height={200}
            className="mr-4"
          />
          <div>
            <p className="text-xs font-bold">
              &copy; 2019 - PT. YELLOWFIT GROUP INDONESIA.
            </p>
            <p className="text-xs">
              All Rights Reserved powered by Yellowfitkitchen.com
            </p>
            <div className="flex items-start justify-start">
              <span className="flex items-center">
                <a
                  href="/terms"
                  className="text-blue-400 hover:text-blue-300 text-xs py-0 font-bold"
                >
                  Terms & Condition
                </a>
                <span className="border-l-2 border-black h-3 inline-block mx-2" />
              </span>
              <span className="flex items-center">
                <a
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 text-xs px-1 py-0 font-bold"
                >
                  Contact
                </a>
                <span className="border-l-2 border-black h-3 inline-block mx-2" />
              </span>
              <span className="flex items-center">
                <a
                  href="/privacy-policy"
                  className="text-blue-400 hover:text-blue-300 text-xs px-1 py-0 font-bold"
                >
                  Privacy Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
