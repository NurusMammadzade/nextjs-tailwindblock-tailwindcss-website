import React from 'react'
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
function Selector() {
    return (
        <div>
            <div className='flex font-thin text-[30px] justify-center text-center'>
                <button className='w-[300px] bg-sky-300 rounded-lg text-white hover:bg-sky-600'>Blog</button>
            </div><br />
            <div className="flex justify-center bg-gray-50">
                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center">
                    <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                        <div className="h-26 w-full overflow-hidden">
                            <img src="https://source.unsplash.com/random/500x400/?nature" alt="Tiger" title='Tiger' />
                        </div>
                        <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
                        <div className="font-bold text-lg text-black m-2">There is something about nature.
                        </div>
                        <div className="text-gray-500 m-2 text-sm">
                            <a href="">
                                There is something about nature that just feels so
                                calming. Whether you are out hiking through the wilderness or simply taking a stroll through your
                                local park.
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex m-2">
                                <IoChatbubbleOutline className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">896</div>
                                <MdOutlineRemoveRedEye className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">5648</div>
                            </div>
                            <div className="m-2">
                                <IoShareSocialOutline className="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                        <div className="h-26 w-full overflow-hidden">
                            <img src="https://source.unsplash.com/random/500x400/?beach" alt="image" />
                        </div>
                        <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
                        <div className="font-bold text-lg text-black m-2">This is post title</div>
                        <div className="text-gray-500 m-2 text-sm">
                            <a href="">
                                When you go to the beach, there are a few things that you should expect.The first thing is that the beach will be hot. The beaches in California are typically hot, and the beaches in Florida are typically hot.
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex m-2">
                                <IoChatbubbleOutline className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">896</div>
                                <MdOutlineRemoveRedEye className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">5648</div>
                            </div>
                            <div className="m-2">
                                <IoShareSocialOutline className="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
                        <div className="h-26 w-full overflow-hidden pb-5">
                            <img src="https://source.unsplash.com/random/500x400/?galaxy " alt="Tiger" title='Tiger' />
                        </div>
                        <div className="text-sm text-gray-500 m-2">30 March, 2023</div>
                        <div className="font-bold text-lg text-black m-2">This is post title</div>
                        <div className="text-gray-500 m-2 text-sm">
                            <a href="">
                                Galaxies are one of the biggest things in the Universe.
                                They are so big that they can be seen with the naked eye. Galaxies are made up of billions of
                                stars.
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex m-2">
                                <IoChatbubbleOutline className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">896</div>
                                <MdOutlineRemoveRedEye className="m-1 text-gray-500 cursor-pointer" />
                                <div className="text-gray-500 m-1 mb-4 text-sm">5648</div>
                            </div>
                            <div className="m-2">
                                <IoShareSocialOutline className="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selector