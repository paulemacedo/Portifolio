import React from "react";
import Reveal from "./Reveal";
import { useTranslation } from 'react-i18next';


const Skills = () => {

    const { t } = useTranslation();

    const skills = [
        {
            category: t('skills.cybersecurity'),
            technologies: [
                { name: 'Kali Linux' },
                // { name: 'Burp Suite' },
                // { name: 'Wireshark' },
                // { name: 'Nmap' },
                // { name: 'Metasploit' },
                { name: 'OWASP Top 10' },
                { name: 'ISO 27001 / LGPD' },
                { name: 'JWT · bcrypt · RBAC' },
            ],
        },
        {
            category: t('skills.systems'),
            technologies: [
                { name: 'Linux (Arch / Ubuntu)' },
                { name: 'Bash / Shell Script' },
                { name: 'Hardening / sysctl' },
                { name: 'Dual Boot' },
                { name: 'Git' },
            ],
        },
        {
            category: t('skills.networks'),
            technologies: [
                { name: 'TCP/IP · DNS · HTTP/HTTPS' },
                { name: 'REST APIs' },
                { name: 'Swagger / OpenAPI' },
                { name: 'Postman' },
            ],
        },
        {
            category: t('skills.backend'),
            technologies: [
                { name: 'Python' },
                { name: 'JavaScript' },
                { name: 'Java' },
                { name: 'SQL' },
                { name: 'Node.js' },
                { name: 'MongoDB' },
                { name: 'Swagger / OpenAPI' },
            ],
        },
        {
            category: t('skills.frontend'),
            technologies: [
                { name: 'HTML5' },
                { name: 'CSS3' },
                { name: 'JavaScript' },
                { name: 'React' },
                { name: 'Redux' },
                { name: 'Tailwind CSS' },
                { name: 'Responsive Design' },
            ],
        },
        {
            category: t('skills.design_creativity'),
            technologies: [
                { name: 'Figma' },
                { name: 'DaVinci Resolve' },
                { name: 'Unity / C#' },
                { name: 'GIMP' },
            ],
        },
    ];

    return (
        <div className='max-w-[950px] mx-auto flex flex-col items-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
            <Reveal>
                <h2 className='text-3xl font-bold mb-4 text-center'>
                    {t('skills.title')}
                </h2>
                <p className='text-center mb-8'>
                    {t('skills.description')}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className='border border-purple-900 p-6 rounded-lg bg-purple-900/10 shadow-lg'
                        >
                            <h3 className="text-xl font-bold mb-4 text-purple-400 tracking-wide uppercase">
                                {skill.category}
                            </h3>
                            <ul className='space-y-3'>
                                {skill.technologies.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className='flex items-center gap-3 group'
                                    >
                                        {/* Bullet marker */}
                                        <span className='w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0 group-hover:bg-purple-300 transition-colors duration-200' />

                                        {/* Name */}
                                        <span className='text-gray-300 group-hover:text-white transition-colors duration-200 text-sm font-medium'>
                                            {tech.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}

export default Skills;