import React, { forwardRef } from 'react'
import Section from '../layout/Section'
import UlSmall from '../ui/UlSmall'
import iconTools from '../../assets/iconTools'

const Skills = forwardRef((props, ref) => {

    const listSkills = [
        { title: 'WebDevelopment', subtitle: '', sublist: ['HTML5, js, CSS3, TailwindCSS, SCSS, SASS', 'Python, PHP, JavaScript, TypeScript', 'React js, Node js', 'Django, Django - Rest Framework', 'PostgreSQL, MySQL, SQLite', 'Sviluppo di interfacce responsive e moderne', 'UI/UX design'] },
        { title: 'Amministrazione e gestione documentale', subtitle: '', sublist: ['Archiviazione digitale e cartacea conforme alle normative aziendali', 'Raccolta e organizzazione della documentazione dei subappaltatori', 'Supporto alla preparazione di pratiche amministrative e fiscali', 'Redazione e formattazione di documenti (Word, Excel, PDF)', 'Ricerca efficiente di informazioni online (web research)', 'Realizzazione di semplici applicazioni web interne (gestione magazzino, registrazione ore, strumenti, comunicazioni interne)'] },
        { title: 'Competenze tecniche – Operaio Edile', subtitle: '', sublist: ['Posa di piastrelle su pavimenti e rivestimenti', 'Tinteggiatura e pittura di interni ed esterni', 'Intonacatura manuale e rasatura delle superfici', 'Montaggio di strutture in cartongesso semplici (pareti divisorie, controsoffitti)', 'Installazione di infissi in PVC e alluminio (finestre, porte finestre)'] },
    ]

    const listTools = [
        { text: 'HTML-5', icon: iconTools.html5 },
        { text: 'CSS-3', icon: iconTools.css3 },
        { text: 'SASS', icon: iconTools.sass },
        { text: 'JavaScript', icon: iconTools.js },
        { text: 'Python', icon: iconTools.python },
        { text: 'TypeScript', icon: iconTools.typescript },
        { text: 'ReactJS', icon: iconTools.reactjs },
        { text: 'PostgreSQL', icon: iconTools.postgresql },
        { text: 'Excel', icon: iconTools.excel },
        { text: 'Word', icon: iconTools.word },
    ]

    return (
        <Section id='skills' className='flex flex-col gap-10 pt-15' ref={ref}>
            <h3 className='text-yellow-500 text-6xl font-bold text-shadow-md'>Skills & Tools</h3>
            <div className='flex flex-col gap-20 lg:gap-30'>
                <UlSmall list={listSkills} />
                <ul className='max-w-2xl grid grid-cols-3 gap-10 md:grid-cols-5 self-center'>
                    {listTools.map((tool) => {
                        return (
                            <li key={tool.text} className='flex flex-col gap-3'>
                                <img width={'40px'} src={tool.icon} alt="" />
                                <span className='text-white font-bold'>{tool.text}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Section>
    )
})

export default Skills