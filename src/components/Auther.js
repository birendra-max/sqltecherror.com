import React from 'react'
import author from './logo/Auther.jpg';
import whatsapp from './logo/whatsapp.png'
export default function Auther() {
    return (
        <>
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
        </>
    )
}
