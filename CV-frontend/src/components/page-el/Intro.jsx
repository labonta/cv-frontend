import React, { forwardRef } from 'react'
import Section from '../layout/Section'
import me from '../../assets/me.jpg'

const Intro = forwardRef((props, ref) => {
    return (
        <Section id='introduzione' className='flex flex-col gap-20 pt-10' ref={ref}>

            <div className='flex flex-col gap-10'>
                <div className='relative w-[250px] h-[250px] self-center  lg:w-[350px] lg:h-[350px] flex flex-row items-start rounded-full overflow-hidden border-2 border-yellow-500'>
                    <img className='' src={me} alt="" />
                </div>

                <div className='self-center'>
                    <h1 className='text-white text-7xl font-bold'>Vladislav Kuchev</h1>
                    <span className='text-yellow-500 text-3xl font-bold'>Al momento sto percependo la NASPI</span>
                </div>
            </div>


            <nav>
                <ul className='flex flex-col gap-3'>
                    <li className='text-xl'><a href="" className='flex flex-row gap-4'><i className='text-yellow-500 bi bi-envelope-at'></i><span className='text-white'>vladislavkuchev11@gmail.com</span></a></li>
                    <li className='text-xl'><a href="" className='flex flex-row gap-4'><i className='text-yellow-500 bi bi-telephone'></i><span className='text-white'>+39 371-560-34-77</span></a></li>
                    <li className='text-xl'><a href="" className='flex flex-row gap-4'><i className='text-yellow-500 bi bi-geo-alt'></i><span className='text-white'>Montoggio (GE), Italy</span></a></li>
                </ul>
            </nav>
        </Section>
    )
})

export default Intro