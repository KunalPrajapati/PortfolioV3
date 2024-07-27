// components/Intro.js
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Typical from 'react-typical';

const Intro = () => {
  
  return (
    <section id="Intro" className="w-full min-h-[90vh] flex flex-col justify-center ">
      <div className="container flex justify-between mx-auto">
        <div>
          <div className="head ">
            <p className="text-2xl font-semibold text-white transition duration-200 greeting md:text-5xl dark:text-gray-700">
              Hi, my name is
            </p>
            <span className="flex text-4xl font-extrabold text-white group dark:text-gray-700 w-fit sm:text-4xl sm:my-6 md:gap-x-6 md:text-5xl xl:text-6xl 2xl:my-10 2xl:text-7xl">
              <span className="text-pink-600 transition duration-300 group-hover:-translate-x-6">&lt;</span>
                Kunal Prajapati
              <span className="text-pink-600 transition duration-300 group-hover:translate-x-6">/&gt;</span>
            </span>
            <div className='flex flex-row items-center text-2xl font-bold text-white gap-x-2 dark:text-gray-700 md:text-5xl'>
            <p className="text-2xl font-bold text-white transition duration-200 job dark:text-gray-700 md:text-5xl">
            I'm a {' '} </p>
           
              <Typewriter
            words={['Web Developer', 'React Native Developer']}
            loop={Infinity}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={100}
            delaySpeed={1000}
           
          />
            </div>
            
             
            
            <p className="mt-3 text-sm leading-loose text-pink-400 intro md:text-lg filter invert-200">
              I Develop Accessible, Elegant Apps using modern tech stacks.
            </p>
          </div>
          <div className='flex flex-col'>

            <div className="mt-16 bottom ">
              <a href="#contact">
                <button className="px-6 py-2 mr-4 font-semibold text-white duration-500 bg-pink-600 border border-pink-600 rounded-md contact hover:text-pink-600 hover:border-pink-600 hover:bg-transparent text-main" aria-label="contact-btn">
                  Get in touch
                </button>
              </a>
              <a href="#experience">
                <button className="work dark:bg-neutral-700/20 dark:hover:bg-pink-600/20 dark:text-gray-700 text-white dark:hover:text-pink-500 font-semibold hover:text-pink-500 duration-500 hover:bg-pink-500 hover:bg-opacity-10 border-transparent border-[1px] px-6 py-2 rounded-md" aria-label="work-btn">
                  See my work
                </button>
              </a>
            </div>



            <div className="flex flex-col items-center w-full pt-10 gap-y-4 sm:hidden">
              <a className="px-2 py-1 tracking-wider text-white transition-all rounded w-fit bg-white/20 dark:text-gray-700 dark:hover:text-pink-600 hover:text-pink-400 backdrop-blur dark:bg-neutral-950/20" href="mailto:karanchandravanshi217@gmail.com">kunalprajpati@gmail.com</a>
              <div className="flex items-center  dark:text-gray-700 text-white hover:text-pink-400 justify-center gap-x-4 before:block before:h-[1px] before:w-4 dark:before:bg-black dark:after:bg-black before:bg-white after:block after:h-[1px] after:w-4 after:bg-white">
                or
              </div>
              <div className="flex w-[100%] items-center justify-between gap-x-4 mr-4 text-xl">
                <a aria-label="social-link" className="p-2 text-white transition rounded cursor-pointer socials dark:text-gray-700 dark:hover:text-pink-600 hover:text-pink-400 bg-white/20 backdrop-blur dark:bg-neutral-950/20" href="https://www.github.com/KunalPrajapati" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a aria-label="social-link" className="p-2 text-white transition rounded cursor-pointer socials dark:text-gray-700 dark:hover:text-pink-600 hover:text-pink-400 bg-white/20 backdrop-blur dark:bg-neutral-950/20" href="https://www.instagram.com/kunallprajapati" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a aria-label="social-link" className="p-2 text-white transition rounded cursor-pointer socials dark:text-gray-700 dark:hover:text-pink-600 hover:text-pink-400 bg-white/20 backdrop-blur dark:bg-neutral-950/20" href="https://www.twitter.com/kunalprajapati01" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                    </path></svg>
                </a>
                <a aria-label="social-link" className="p-2 text-white transition rounded cursor-pointer socials dark:text-gray-700 dark:hover:text-pink-600 hover:text-pink-400 bg-white/20 backdrop-blur dark:bg-neutral-950/20" href="https://www.linkedin.com/in/kunalprajapati01/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Intro;
