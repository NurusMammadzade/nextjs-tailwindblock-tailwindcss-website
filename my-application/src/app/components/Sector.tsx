import React from 'react'
import { FaHome, FaPhone, FaPinterest, FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTelegram, FaEnvelope } from "react-icons/fa";
import { SiFastify } from "react-icons/si";
import Image from 'next/image';
import background from '@/app/img/university-world-background-2.jpg';

function Sector() {
    return (
        <div>
            <div>
                <Image src={background} title='background' alt='background' className='mb-[-740px]' />
                <div className="p-4 items-center">
                    <div className="flex justify-center pt-10 pb-14 md:pb-9">
                        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-blue-600 md:text-3xl" aria-label="logo">
                            <SiFastify className='text-5xl' />
                            <div className='text-white'>
                                Tech
                            </div>
                            AI
                        </a>
                    </div>
                    <div className="space-y-9 grid grid-cols-1 md:grid-cols-2 md:pl-24 md:pr-16 lg:grid-cols-4 lg:px-7 xl:px-14 xl:ml-16">
                        <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
                            <div className="flex justify-start md:mt-10">
                                <h1 className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                    Inform
                                </h1>
                                <span className="text-white font-sans uppercase font-normal tracking-wider">
                                    ation
                                </span>
                            </div>
                            <p>
                                Registration Start Date
                            </p>
                            <p>
                                Registration End Date
                            </p>
                            <p>
                                Exam Last Date
                            </p>
                        </div>
                        <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
                            <div>
                                <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90"> dates &nbsp;</pre>
                            </div>
                            <p>
                                23 Dec 2021
                            </p>
                            <p>
                                30 May 2022
                            </p>
                            <p>
                                23 Dec 2021 to 31 May 2022
                            </p>
                        </div>
                        <div className="md:flex flex-col justify-between">
                            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
                                <div className="flex justify-start">
                                    <h1
                                        className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        About
                                    </h1>
                                    <span className="text-white font-sans uppercase font-normal tracking-wider">
                                        exam
                                    </span>
                                </div>
                                <p className="">
                                    <a className="hover:text-[#cacaca]" href="#">Apply</a>
                                </p>
                                <p className="">
                                    <a className="hover:text-[#cacaca]" href="#">Eligibility</a>
                                </p>
                                <p className="">
                                    <a className="hover:text-[#cacaca]" href="#">Application Process</a>
                                </p>
                                <p className="">
                                    <a className="hover:text-[#cacaca]" href="#">Syllabus</a>
                                </p>
                            </div>
                            <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
                                <div className="flex justify-start md:-mt-32">
                                    <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                        suppor
                                    </h1>
                                    <span className="text-white font-sans uppercase font-normal tracking-wider">
                                        t
                                    </span>
                                </div>
                                <p className="">
                                    <a href="#" className="hover:text-[#cacaca]">FAQ</a>
                                </p>
                            </div>
                        </div>
                        <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
                            <div className="flex justify-start">
                                <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                                    get in t
                                </h1>
                                <span className="text-white font-sans uppercase font-normal tracking-wider">
                                    ouch
                                </span>
                            </div>
                            <div className="space-x-3">
                                <FaHome className="text-[17px]" />
                                <div className='pl-4 mt-[-19px]'>
                                    <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                                        Our Company
                                    </strong>
                                </div>
                            </div>
                            <div className="leading-7">
                                <p className=""> NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab (INDIA) <br /> General Helpline
                                    No:+91 987-6543-210
                                </p>
                            </div>
                            <div className="leading-7 mt-4 text-[15px] font-[500]">
                                <div className="space-x-3 hover:text-[#cacaca]">
                                    <FaPhone className="text-[17px]" />
                                    <div className='pl-4 mt-[-20px]'>
                                        <a href="#">
                                            1800 1800 88800
                                        </a>
                                    </div>
                                </div>
                                <div className="space-x-3 hover:text-[#cacaca]">
                                    <FaPhone className="text-[17px]" />
                                    <div className='pl-4 mt-[-20px]'>
                                        <a href="#">9946948000S (
                                            <span className="text-[13px] font-[500]">General Enquiry</span>
                                            )
                                        </a>
                                    </div>
                                </div>
                                <div className="space-x-3 hover:text-[#cacaca]">
                                    <FaPhone className="text-[17px]" />
                                    <div className='pl-4 mt-[-20px]'>
                                        <a href="#">994694700&nbsp;( <span className="text-[13px] font-[500]">Technical Support:CUCET</span> )
                                        </a>
                                    </div>
                                </div>
                                <div className="space-x-3 hover:text-[#cacaca]">
                                    <FaEnvelope className="text-[16px]" />
                                    <div className='pl-4 mt-[-20px]'>
                                        <a href="#">
                                            admin@Company.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block">
                                <FaFacebook className='text-[40px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px] pl-[5px]">
                                <FaTwitter className='text-[33px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-orange-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[5px] pl-[4px]">
                                <FaInstagram className='text-[32px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Weeb' href="#" className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px] pl-[5px]">
                                <FaLinkedin className='text-[30px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-red-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[4.5px] pl-[4px]">
                                <FaYoutube className='text-[32px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-red-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-0.25 pl-0.25">
                                <FaPinterest className='text-[40px]' />
                            </a>
                        </p>
                        <p>
                            <a title='Web' href="#" className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-0.25 pl-">
                                <FaTelegram className='text-[40px]' />
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col divide-y pt-[56px] divide-[#747474] mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>

                <div className='text-white font-thin text-center'>
                    <h1 className='text-white text-center font-bold'>Copyright Ⓒ You Website 2024.</h1>Created by PreDot
                </div>
            </div>
        </div>
    )
}
export default Sector