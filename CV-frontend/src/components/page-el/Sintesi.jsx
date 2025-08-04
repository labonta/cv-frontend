import React, { forwardRef } from 'react'
import Section from '../layout/Section'
import Ul from '../ui/Ul'

const Sintesi = forwardRef((props, ref) => {
    const list = [
        { title: 'istruzione', subtitle: 'Vittorio Emanuele II Ruffini - Genova (GE)', text: ['Diploma di istituto tecnico - settore economico - indirizzo "Amministrazione finanza e marketing" - articolazione - "Sistemi informativi aziendali"'] },
        { title: 'lingue', subtitle: '3 lingue', text: ['Madrelingua - russo (C2)', 'Seconda lingua - italiano (B2+/C1)', 'Terza lingua - inglese (B1)'] },
        { title: 'patente', subtitle: 'A - B', text: ['Conseguite nel 2022'] },
        { title: 'obiettivi', subtitle: 'Imparare e crescere', text: ['Sono una persona dinamica, curiosa e orientata alla crescita personale e professionale. Amo imparare cose nuove, mettermi alla prova e sviluppare continuamente le mie competenze. Lavoro con entusiasmo sia in team che in autonomia, dimostrando responsabilità, flessibilità e spirito di iniziativa.'] },
    ]
    return (
        <Section id='sintesi' className='flex flex-col gap-20 pt-15' ref={ref}>
            <div className='flex flex-col gap-10'>
                <h3 className='text-6xl font-bold text-yellow-500 text-shadow-lg/20 text-shadow-gray-800'>Sintesi</h3>
                <Ul list={list} />
            </div>
        </Section>
    )
})

export default Sintesi