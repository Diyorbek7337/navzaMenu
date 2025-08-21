import React from 'react'
import Header from "../Header/Header"
import Search from '../Search/Search'
import Categories from '../Categories/Categories'

function Main() {
  return (
    <div className='MainBox'>
        <Header />
        <Search/>
        <Categories/>
    </div>
  )
}

export default Main