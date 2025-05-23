import React from "react";
import logo from "../assets/logo.png";

function Footer() {
    return (
        <div className=" h-[30vh] lg:h-[90vh] md:h-[50vh] relative bg-[#FFC11F] px-8 pt-16">
            <div className="flex h-full items-end justify-between">
                <div className=" h-full">
                    <div className="flex flex-col h-[75%] md:h-[90%] justify-between">
                        <p className="z-50 text-black 2xl:text-9xl lg:text-7xl md:text-5xl text-3xl">Nodeact</p>
                        <div className="flex items-center pb-10 lg:pb-0">
                            <p className="text-black 2xl:text-8xl lg:text-6xl md:text-4xl text-xl ">Let's Talk </p>
                            <svg className="md:h-[64px] h-[24px] w-[24px] md:w-[64px]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M54.4726 31.7842H7.99976" stroke="black" strokeWidth="5" />
                                <path d="M31.8477 54.3993L54.4777 31.7684L32.3095 9.59937" stroke="black" strokeWidth="5" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full max-w-[calc(100%-4rem)] left-4">
                        <hr className=" border-black" />
                        <div className="flex w-full lg:px-8 justify-between items-center">
                            <p className=" py-4 text-black md:text-xl text-xs">Nodeact @ 2025</p>
                            <p className=" py-4 text-black md:text-xl text-xs">All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end 2xl:mb-32 lg:mb-20 md:mb-24 mb-28">
                    <img src={logo} alt="" className="2xl:h-auto lg:h-52 md:h-40 h-20" />
                </div>
            </div>
        </div>
    );
}

export default Footer;