import Image from "next/image";
import { navLinks } from "./links";
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import DarkModeToggle from "../Togglebutton";
import Link from "next/link";
import Me from '../../../public/assets/pic.png'; 

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // main
    <nav className="sticky container mx-auto w-[100%] top-0 left-0 z-[99] bg-opacity-40  py-2 px-0">
      <div className="my-0 mx-auto w-[90%] flex justify-between">
        {/* logo */}
        <div className="flex flex-row items-center justify-center">
          <Link href="/">
          <Image
            // src={"/assets/pic.png"}
            src={Me}
            alt="logo"
            width={50}
            height={100}
            className="w-16 h-16 cursor-pointer image hover:scale-110"
          />
          </Link>
          <Link href="/">
            <span className="mt-3 ml-2 text-xl font-semibold text-white hover:rotate-6 dark:text-gray-700">
              Kunal<span className="font-bold text-pink-400">.Dev</span>
            </span>
          </Link>
        </div>

        {/* desktop view -- nav elements */}
        <div className="flex flex-row items-center gap-x-6">
          <ul className="flex gap-6 max-sm:hidden ">
            {navLinks.map((navlink) => {
              const { title, url } = navlink;
              return (
                <li className="flex items-center " key={url}>
                  <Link href={`#${url.toLowerCase()}`}>
                    <span className="py-1 px-3 pb-[6px] items-center justify-center rounded dark:text-pink-600 text-white  hover:text-pink-500 dark:hover:bg-neutral-700/20 font-semibold">
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <DarkModeToggle />
        </div>

        {/* for mobile view--- toggle icon */}
        <div className="flex flex-col sm:hidden ">
          <button
            onClick={toggleMenu}
            className={`nav-menu dark:bg-gray-700 dark:before:bg-black dark:after:bg-black ${isMenu ? "close" : "open"}`}
            aria-label="nav-menu-btn"
          ></button>

          {/* for mobile view--- nav elements */}
          <div className={isMenu ? 'mobile-menu active bg-pink-500' : 'mobile-menu inactive bg-pink-500'}>
            <div className="mobile-links">
              {navLinks.map((navlink) => {
                const { title, url } = navlink;
                return (
                  <Link key={url} href={`#${url.toLowerCase()}`}>
                    <span
                      className="font-semibold text-white hover:text-black"
                      onClick={toggleMenu}
                    >
                      {title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <ul className="flex list-none wrapper">
              <li className="icon linkedin">
                <a href="https://www.github.com/KunalPrajapati" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">LinkedIn</span>
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                </a>
              </li>
              <li className="icon github">
                <a href="https://github.com/KunalPrajapati" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">Github</span>
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                </a>
              </li>
              <li className="icon twitter">
                <a href="https://twitter.com/kunalprajapati01" target="_blank" rel="noopener noreferrer">
                  <span className="tooltip">Twitter</span>
                  <span>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
