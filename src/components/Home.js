import React from 'react'
import author from './logo/Auther.jpg';
import whatsapp from './logo/whatsapp.png'
import BlogContent from './BlogContent';

export default function Home() {
    return (
        <>
            <div className="flex flex-col bg-indigo-100 mt-2 md:px-20 mb-4">
                <div className="bg-white mt-0">
                    <div className="container mx-auto px-0 flex flex-col md:flex-row">
                        <div id="posts" className="w-full md:w-4/4 grid hover:shadow-2xl transition-all duration-300 transform">
                           <BlogContent/>
                        </div>

                        <div id="posts2" className="w-full md:w-96 md:py-0 py-4 px-2 bg-indigo-100">
                            <div className="bg-slate-50 border mb-2 flex justify-center align-center cursor-pointer hover:shadow-md transition-all duration-300 transform">
                                <header className="px-2 py-4 mt-0 flex flex-col justify-center items-center text-center">
                                    <span id="author" className="bg-blue-100 text-black text-sm font-bold me-2 px-2 py-0.2 h-6 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 mr-72 -mt-2">
                                        Author </span>
                                    <img src={author} className="rounded-full h-28 w-28" alt="auther" />
                                    <h1 className="text-1xl text-black font-bold mt-2">
                                        Naren Dahiya
                                    </h1>
                                    <h2 className="text-base md:text-sm text-black font-bold">
                                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nsdahiya8040@gmail.com" target="_blank" className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
                                            nsdahiya8040@gmail.com
                                        </a>
                                    </h2>
                                    <ul className="flex flex-col mt-2">
                                        <a href="https://www.linkedin.com/in/narender-dahiya-a09257181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                                            <img className="w-6 h-6" src="https://www.svgrepo.com/show/475661/linkedin-color.svg" loading="lazy" alt="linked in logo" />
                                            <span className="pt-0.5">Contact with LinkedIn</span>
                                        </a>
                                        <a href="https://wa.me/919053942621/?text=Hi Naren, Whatsup" target="_blank" className="mt-2 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                                            <img className="w-8 h-8" src={whatsapp} loading="lazy" alt="whatsapp logo" />
                                            <span className="pt-0.2">Contact with WhatsApp</span>
                                        </a>
                                    </ul>
                                </header>
                            </div>

                            <div className="bg-white border p-4 hover:shadow-md transition-all duration-300 transform mt-2">
                                <h1 className="text-2xl md:text-2xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-black-200">
                                    Blogs
                                </h1>
                                <form method="post" className="relative max-w-sm mx-auto mt-7">
                                    <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="search" placeholder="Search" name="serchitem" required />
                                    <button name="serchbox" className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                                        </svg>
                                    </button>
                                </form>
                                <ul className="mt-5">
                                    <li className="mb-2 ml-5 p-2" type="disc">
                                        <a href="blog.php?post_id=<?php echo $r['blogid']; ?>" className="text-1xl text-blue-700 hover:text-blue-700  hover:underline ">Blogs name</a>
                                    </li>
                                </ul>


                            </div>

                            <div className="bg-white border p-4 mt-4 hover:shadow-md transition-all duration-300 transform ">
                                <h1 className="text-lg md:text-1xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-black-200">
                                    Categories
                                </h1>
                                <hr />
                                <br />
                                <ul className="list-none">
                                    <li className="mb-2 ml-4" type="disc">
                                        <a href="#" className="text-gray-700 hover:text-gray-900">SQLTECH</a>
                                    </li>
                                </ul>
                            </div>

                            <ul className="mt-4 bg-white divide-y divide-gray-300 max-w-sm mt-0 mx-auto px-4 border">
                                <h1 className="text-lg md:text-1xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-black-200">
                                    Comments
                                </h1>
                                <li className="py-4">
                                    <h1>Comment</h1>
                                    <ul className="divide-y bg-green-100 px-4 py-0 mt-2">
                                        <li className="py-2">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-md font-medium">comments</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <h1 className="ml-7">Replay</h1>
                                    <ul className="ml-7 divide-y divide-gray-300 bg-blue-100 px-4 py-0 mt-2">
                                        <li className="py-2">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-md font-medium">Replay</span>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
