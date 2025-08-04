import React from 'react'
import Button from '../ui/Button'

function Header() {
    return (
        <header className='w-full flex flex-row items-center justify-between h-30'>
            <div className='flex flex-row gap-2 items-center'>
                <i className='bi bi-circle-fill text-[10px] text-green-500 animate-pulse'></i>
                <span className='text-white font-bold text-lg'>Pronto per il lavoro</span>
            </div>
            <Button className='relative group bg-yellow-500 px-5 py-3 rounded-full hover:bg-white transform transition-all duration-500 overflow-hidden'>
                <i className='absolute text-xl left-1/2 bottom-1/2 -translate-x-1/2 -translate-y-full group-hover:translate-y-1/2 transform transition-all duration-300 bi bi-download'></i>
                <div className='transform group-hover:translate-y-[50px] transition-all duration-300 font-bold text-gray-800'>Scarica CV</div>
            </Button>
        </header>
    )
}

export default Header