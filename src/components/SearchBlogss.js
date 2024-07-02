import React from 'react'

export default function SearchBlogss() {
    return (
        <>
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
        </>
    )
}
