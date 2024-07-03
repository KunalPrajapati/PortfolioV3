// components/SideMail.js
import React from 'react';

const SideMail = () => {
    return (
        <div
            className="fixed flex-row items-center hidden transition-transform duration-200 ease-in-out transform rotate-90 md:flex gap-x-3 bottom-2 right-4 z-5"
            style={{
                transformOrigin: '90% ',
            }}
        >
            <div>
                <a href="mailto:kunalprajpati@gmail.com" className="text-white duration-300 dark:text-gray-700 hover:text-pink-400">
                    kunalprajpati@gmail.com
                </a>
            </div>
            <div className="w-32 h-[1px] mt-1 dark:bg-gray-700 bg-white"></div>
        </div>
    );
};

export default SideMail;
