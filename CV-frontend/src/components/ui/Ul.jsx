import React from 'react'

function Ul({ list }) {
    return (
        <div className='flex flex-col gap-2'>
            {list.map((item) => {
                return (
                    <div key={item.title} className='flex flex-row gap-3'>
                        <div className='flex flex-col items-center justify-items-start gap-2'>
                            <div className='bg-yellow-500 w-[9px] h-[9px] rounded-full animate-pulse'></div>
                            <div className='bg-gray-500 w-[1px] h-full'></div>
                        </div>
                        <div className='flex flex-col gap-2 max-w-2xl pb-10'>
                            <div>
                                <h4 className='text-white text-3xl font-bold uppercase'>{item.title}</h4>
                                <span className='text-yellow-500'>{item.subtitle}</span>
                            </div>
                            {item.text.map((sentence)=> {
                                return (
                                    <p key={sentence} className='text-white text-xl'>{sentence}</p>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Ul