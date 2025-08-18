import React from 'react'
import { IoSearch } from "react-icons/io5";
import "./search.css";


function Search() {
    return (
        <div className='SearchBox container'>
            <div className='searchContent'>
                <input type='search' placeholder='Izlash...' />
                <div className='searchIcon'>
                    <IoSearch />
                </div>
            </div>

        </div>
    )
}

export default Search