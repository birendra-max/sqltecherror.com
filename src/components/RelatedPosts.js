import React from 'react'
import Defaultimg from './logo/defaultimg.webp'

export default function RelatedPosts() {

    return (
        <>
            <section className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8 bg-white p-8 hover:shadow-2xl transition-all duration-300 transform">
                    {/* <!-- Heading --> */}
                    <div className="relative mb-10 pt-8 md:mb-16">
                        <h2 className="mb-4 text-center font-serif text-3xl font-bold text-blue-900 md:mb-6 md:text-4xl">Related Posts</h2>
                    </div>
                    {/* <!-- /Heading --> */}
                    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
                        {/* <!-- Article --> */}
                        <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                            <img className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src={Defaultimg} alt="blog" />
                            <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
                            <div className="py-1 px-6">
                                <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                                <div className="flex flex-wrap text-sm text-gray-500">
                                    <span className="mr-1">Oct 30, 2022</span>
                                    <span className="">· 9 min read</span>
                                </div>
                                <div className="mt-1">
                                    <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                        3.5K
                                    </span>
                                </div>
                            </div>
                        </article>
                        {/* <!-- /Article --> */}

                    </div>
                </div>
            </section>


        </>
    )
}
