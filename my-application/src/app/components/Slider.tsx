import React from 'react'
import { FaSkullCrossbones } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

function Slider() {
    return (
        <div>
            <div className='flex font-thin text-[30px] justify-center text-center'>
                <button className='w-[300px] bg-sky-300 rounded-lg text-white hover:bg-sky-600'>
                    Login Or Register
                </button>
            </div>
            <br />
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                        <div className="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
                            <div className="flex flex-col md:flex-row items-center shadow-md h-full">
                                <div className="md:w-1/2 overflow-hidden">
                                    <div className="flex flex-col items-center justify-center text-stone-400">
                                        <FaDroplet className='text-[5px] mr-10 mb-[-5px] text-red-600' />
                                        <FaSkullCrossbones className='text-[30px] text-sky-500' />
                                        <div className="flex flex-col">
                                            <div className="m-2">EMAIL</div>
                                            <input title='title' className="border-b m-2  bg-gray-50 focus:outline-none" />
                                            <div className="m-2">PASSWORD</div>
                                            <input title='title' className="border-b m-2  bg-gray-50  focus:outline-none" type="password" />
                                            <div className="flex m-2">
                                                <input title='title' className="border-b  border-stone-400 " type="checkbox" />
                                                <div className="ml-1">Remember Me</div>
                                            </div>
                                            <div className="flex m-2">
                                                <button
                                                    className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium">LOGIN</button>
                                                <button
                                                    className="text-transparent  bg-clip-text bg-gradient-to-l from-fuchsia-600 to-cyan-400 font-bold ml-2 border-2 rounded-2xl px-6 border-cyan-400">CREATE
                                                    ACCOUNT</button>
                                            </div>
                                            <div className="m-2">Forgotten your login details?</div>
                                            <div className="font-medium ml-2">Get Help Signing In</div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" md:w-1/2 overflow-hidden ">
                                    <img src="https://source.unsplash.com/700x600/?computer,login" alt="login"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Slider