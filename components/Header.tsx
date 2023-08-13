"use client";

import React, { FormEvent } from 'react'

function Header() {
    const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

    }
  return (
    <header>
        <form className='flex items-center space-x-2 jusify-center rounded-full py-2 px-2 bg-indigo-100 mx-w-md mx-auto'
        onSubmit={handleSearch}>
            <input type="text" placeholder='Search...' className='flex-1 outline-none bg-transparent text-indigo-400
            placeholder:text-indigo-300'/>
            <button hidden>Search</button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </form>
    </header>
  )
}

export default Header