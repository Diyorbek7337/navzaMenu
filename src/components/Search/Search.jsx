import React from 'react'
import { IoSearch } from "react-icons/io5";
import "./search.css";
import { useState } from "react";



function Search() {


    const [query, setQuery] = useState("");

    return (
        <div className='searchBox m-auto container topBottom'>
            <div className="flex items-center  rounded-full border border-gray-300 overflow-hidden shadow-sm outline-green-300">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search"
                    className="flex-1 px-4 py-2 text-gray-700 outline-none"
                />
                <button className="bg-[#58c537] p-3 flex items-center justify-center">
                    <IoSearch className="text-white w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default Search