import React from 'react'

const Header = ({ list, onSubmit }) => {
    return (
        <div className='bg-transparent w-full h-[64px] flex justify-around sm:justify-between  top-0 fixed sm:ml-2'>
            <h1 className='text-lg sm:text-4xl text-white font-bold items-center flex'>Github Api</h1>
            <form onSubmit={onSubmit} className='flex items-center list-none px-1'>
                <li className='overflow-hidden bg-white rounded-xl h-[50px] w-[200px] sm:h-auto sm:w-auto sm:mr-4'> {list} </li>
            </form>

        </div>
    )
}

export default Header