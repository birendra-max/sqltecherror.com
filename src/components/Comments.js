import React from 'react'

export default function Comments() {
    return (
        <>
            <ul className="mt-4 bg-white divide-y divide-gray-300 max-w-sm mt-0 mx-auto px-4 border hover:shadow-2xl transition-all duration-300 transform">
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
        </>
    )
}
