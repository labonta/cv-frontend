import React, { forwardRef } from 'react'
import Section from '../layout/Section'

const Links = forwardRef((props, ref) => {
    const links = [
        { href: 'mailto:vladislavkuchev11@gmail.com', text: 'vladislavkuchev11@gmail.com', icon: 'bi-envelope-at' },
        { href: 'tel:+393715603477', text: '371 560-34-77', icon: 'bi-telephone' },
        { href: 'https://www.instagram.com/qu4ev_', text: 'qu4ev_', icon: 'bi-instagram' },
        { href: 'https://www.linkedin.com/in/vladislav-kuchev-1515492b3/?trk=opento_sprofile_goalscard', text: 'Vladislav Kuchev', icon: 'bi-linkedin' },
    ]
    return (
        <Section id='links' className='flex flex-col pt-15' ref={ref}>
            <div className='flex-1 flex flex-col gap-10'>
                <h3 className='text-6xl font-bold text-yellow-500 text-shadow-lg/20 text-shadow-gray-800'>Links</h3>
                <nav>
                    <ul className='flex flex-col gap-3'>
                        {
                            links.map((link) => {
                                return (
                                    <li key={link.href} className='text-xl'>
                                        <a href={link.href} className='flex flex-row gap-4'>
                                            <i className={`text-yellow-500 bi ${link.icon}`}></i>
                                            <span className='text-white'>{link.text}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className='mb-30 w-full text-center'>
                <span className='text-white text-xl'>Attualmente disponibile per nuove opportunità</span>
            </div>
        </Section>
    )
})
export default Links