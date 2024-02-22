import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className=" flex items-center justify-around">
                <div className=" m-2 items-start relative w-full flex flex-row justify-between mt-8 ml-8 mr-8 max-w-7xl">
                    <div className="relative">
                        <div className="bg-white p-3 space-y-10 md:grid md:grid-cols-2 md:-mt-6 lg:grid-cols-4">
                            <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                                <h1 className="text-blue-600 text-xl font-medium">Company</h1> <br />
                                <p className="text-gray-500 font-medium text-base hover:text-blue-600 "> A123 Lost Street <br /> Chandigarh, PB 535022 <br /> India </p> <br />
                                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                                    <strong className="tracking-wide text-blue-600 font-normal">Phone:</strong> +91 7008090111 </p>
                                <p className="text-gray-500 font-medium text-base hover:text-blue-600 cursor-pointer">
                                    <strong className="tracking-wide text-blue-600 font-normal">Email:</strong> info@gmail.com </p>
                            </div>
                            <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                                <ul className="mt-2 text-gray-500 font-medium">
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Home</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            About Us</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Services</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Terms of service</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Privacy policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="leading-9 md:w-3/4 md:order-4">
                                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
                                <ul className="mt-2 text-gray-500 font-medium">
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Web Design</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Web Development</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Product Management</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Marketing</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-chevron-right text-blue-600"></i>
                                        <a href="#" className="hover:text-blue-600">
                                            Graphic Design</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:order-2 lg:order-last">
                                <h1 className="text-blue-600 text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1>
                                <br />
                                <p className="text-gray-500 font-medium w-3/5 leading-7 mb-5 md:w-3/4"> Join 25,000+ others and never
                                    miss out on new tips,tutorials, and more. </p>
                                <input
                                    type="email"
                                    placeholder="Enter E-mail Here"
                                    className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:bordermd:w-1/2 lg:w-3/5 border"
                                />
                                <button className="text-white bg-blue-600 p-1 -translate-x-1 rounded-br-xl hover:bg-blue-500"> Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="md:flex hidden bg-gray-900 p-3 flex-col text-center pt-5 md:flex-row md:justify-between space-y-2 md:space-y-0">
                            <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                                <p>@ Copyright
                                    <strong>Company.</strong>All Rights Reserved
                                </p>
                                <p>Designed by
                                    <span className="text-blue-600">TailwindCSS</span>
                                </p>
                            </div>
                            <div className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                                <a title='none' href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                                    <FaTwitter className='ml-1.5 mt-[5px] hover:text-blue-400' />
                                </a>
                                <a title='none' href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                                    <FaInstagram className='ml-1.5 mt-[3px]' />
                                </a>
                                <a title='none' href="#" className="w-8 h-8 bg-orange-500 hover:text-blue-600 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                                    <FaFacebook className='ml-1.5 mt-[3px]' />
                                </a>
                                <a title='none' href="#" className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                                    <FaGoogle className='ml-1.5 mt-[3px]' />
                                </a>
                                <a title='none' href="#" className="w-8 h-8 bg-orange-500 hover:text-blue-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
                                    <FaLinkedin className='ml-1.5 mt-[3px]' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer