// components/Profile.tsx

import Image from 'next/image';
import React from 'react';
import Arrow from '../Icons';
import Label from '../Label';
import Me from '../../../public/assets/Me.png';


const Profile: React.FC = () => {

    const startingDate = new Date('December 1, 2022');


    return (
        <section className='container relative py-12 mx-auto ' id='about'>
            <div className="flex items-center gap-x-4"><h2 className="flex items-center mt-20 text-2xl font-bold text-white gap-x-2 dark:text-gray-700 ">
                <span className="text-pink-500 rounded backdrop-blur ">01.</span>About Me</h2>
                <div className="relative top-[2px] h-[1px] flex-grow animate-bounce  dark:bg-neutral-950/10 bg-white/20"></div>
            </div>

            <div className="flex flex-col items-center justify-between w-full text-white fade-in lg:flex-row lg:items-start lg:gap-x-8">
                <div className='flex flex-col items-center gap-y-6'>
                    <div className=" mt-12 w-[17rem] p-1  rounded-lg border-2 border-pink-400">
                        <Image
                            alt="me"
                            loading="lazy"
                            width={600}
                            height={600}
                            decoding="async"
                            data-nimg="1"
                            className="transition-all rounded-lg contrast-75 grayscale hover:grayscale-0"
                            style={{ color: 'transparent' }}
                            // src="/public/assets/Me.png"
                            src={Me}
                        />

                    </div>

                    <button
                        className="py-2 font-semibold text-white duration-500 bg-pink-600 border border-pink-600 rounded-md hover:text-pink-600 hover:border-pink-600 hover:bg-transparent text-main w-44"
                        onClick={() => {
                            window.open('https://drive.google.com/file/d/1c5iM8aCm4WgPSbeyGfdDdoCWT_K9zOYh/view?usp=sharing', '_blank');
                        }}
                    >
                        Resume
                    </button>
                </div>
                <div className="mt-12 dark:text-gray-800 ">
                    <h4 className="mb-6 text-xl">Short-Bio:</h4>
                    <p className="lg:w-[80%] ">
                        Hi, I'm Kunal Prajapati, a Full Stack Developer from India. I'm a BCA graduate from IPU. I specialize in frontend development and have experience in this field.
                        <br />
                        <br />
                        And I love building websites and mobile apps. I have worked with a few startups and have helped them in building and developing their products.
                        <br />
                        {/* <br />
                        And also  I contribute to open source projects and love to learn new technologies. */}


                    </p>
                    <h4 className="my-10 text-xl">Technologies I'm using now:</h4>
                    <div className="mt-4 w-[100%]">
                        <h5 className="mb-2 font-medium">Languages:</h5>
                        <div className="grid grid-cols-2 gap-3 mb-5 lg:grid-cols-3">
                            {/* Add language items here */}
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Java"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"JavaScript"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"TypeScript"} />
                            </div>
                        </div>

                        <h5 className="mb-2 font-medium">Frontend and Frameworks:</h5>
                        <div className="grid grid-cols-2 gap-3 mb-5 lg:grid-cols-3">
                            {/* Add frontend items here */}
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"HTML"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"CSS"} />
                            </div>

                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"NextJS"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"ReactJS"} />
                            </div>

                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Tailwind CSS"} />
                            </div>
                            {/* <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"SaaS"} />
                            </div> */}
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Bootstrap"} />
                            </div>

                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"React Native"} />
                            </div>

                        </div>

                        <h5 className="mb-2 font-medium">Backend:</h5>
                        <div className="grid grid-cols-2 gap-3 mb-5 lg:grid-cols-3">
                            {/* Add backend items here */}
                            {/* <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Firebase"} />
                            </div> */}
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Node Js"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"MongoDB"} />
                            </div>
                            <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Express Js"} />

                            </div>
                        </div>

                        {/* <h5 className="mb-2 font-medium">Design Tools:</h5> */}
                        {/* <div className="grid grid-cols-2 gap-3 mb-5 lg:grid-cols-3"> */}
                            {/* Add backend items here */}
                            {/* <div className="flex items-center w-full p-1 text-pink-500 group gap-x-1">
                                <Arrow />
                                <Label label={"Figma"} />
                            </div> */}

                        {/* </div> */}


                    </div>


                </div>
            </div>

        </section>




    );
};

export default Profile;
