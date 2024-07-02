import React from 'react'

export default function Categories() {
    return (
        <>
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
        </>
    )
}
