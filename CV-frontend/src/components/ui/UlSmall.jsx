import React from 'react'

function UlSmall({ list }) {
    return (
        <ul className='text-yellow-500 flex flex-col gap-5 xl:grid xl:grid-cols-2'>
            {list.map((item, index) => {
                return (
                    <li key={index} className='flex flex-col gap-3'>
                        {item.title && (
                            <div>
                                <h4 className='text-white font-bold text-xl'>{item.title}</h4>
                                {item.subtitle && (
                                    <span>{item.subtitle}</span>
                                )}
                            </div>
                        )}
                        {item.sublist.length > 0 && (
                            <ul className='list-disc text-yellow-500 pl-10'>
                                {item.sublist.map((subItem, index) => {
                                    return (
                                        <li key={index}>{subItem}</li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

export default UlSmall