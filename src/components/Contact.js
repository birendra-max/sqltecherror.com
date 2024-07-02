import React from 'react'
import ContactImg from './logo/contact img.png'
export default function Contact() {
    return (
        <>
            <div className="py-2 bg-black text-white">
                <div className="mt-4 mb-2 max-w-3xl text-center sm:text-center md:mx-auto">
                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                        Contact
                    </p>
                    <h2 className="font-heading font-bold tracking-tight text-white dark:text-white text-3xl sm:text-5xl">
                        Get in Touch
                    </h2>
                </div>
                <div className="container mx-auto flex flex-col md:flex-row my-12 md:my-2 dark:text-white">
                    <div className="flex flex-col w-full lg:w-2/5 p-8">
                        <form method="post" className="relative border-8 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg -my-12 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full">
                            <h2 id="contact" className="text-3xl font-bold text-black dark:text-white">Let's Connect</h2>
                            <div className="relative">
                                <input type="text" id="username" name="username" placeholder="Your Name" className="peer w-full py-2 border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent text-black" required />
                                    <label for="name" className="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">Your
                                        Name
                                    </label>
                            </div>
                            <div className="relative">
                                <input type="text" id="email" name="email" placeholder="Your Email" className=" peer w-full py-2 border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent text-black" required />
                                    <label for="email" className=" text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">Your
                                        Email
                                    </label>
                            </div>

                            <div className="relative">
                                <textarea name="content" id="content" cols="20" rows="5" placeholder="How can we help?" className=" peer form-textarea resize-none w-full border-4 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent text-black" required></textarea>
                                <label for="content" className=" text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">How
                                    can we help?
                                </label>
                            </div>
                            <button type="submit" name="contactme" className=" py-2 px-6 bg-neutral-900 text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400 ">
                                Send
                            </button>
                        </form>
                    </div>
                    <div className=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src={ContactImg} alt="contact image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
