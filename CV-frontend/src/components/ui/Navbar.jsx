import React, { act } from 'react'


function Navbar({ activeSection }) {
    const links = [
        { href: '#introduzione', id: 'introduzione', text: 'Introduzione', icon: 'bi bi-person' },
        { href: '#sintesi', id: 'sintesi', text: 'Sintesi', icon: 'bi bi-briefcase' },
        { href: '#skills', id: 'skills', text: 'Skills', icon: 'bi bi-lightning-charge' },
        { href: '#links', id: 'links', text: 'Links', icon: 'bi bi-link-45deg' },
    ];
    activeSection && console.log(activeSection);
    
    return (
        <ul className='fixed left-1/2 bottom-[20px] transform -translate-x-1/2 p-1 flex flex-row gap-4 lg:gap-1 bg-gray-500/50 text-white text-lg rounded-full z-50'>
            {links.map(link => (
                <li
                    key={link.id}
                >
                    <a href={link.href} className={`flex flex-row gap-2 py-3 px-4 rounded-full transition-all duration-300 ${activeSection === link.id ? 'bg-yellow-400 text-black' : 'text-white'}`}>
                        <i className={link.icon}></i>
                        <span className='hidden lg:block'>{link.text}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navbar