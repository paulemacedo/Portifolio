import Archemy from "../assets/Archemy.png";
import bytedesabor from "../assets/bytedesabor.png";
import CTF from "../assets/CTF.png";
import Reveal from "./Reveal";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { AiFillGithub } from "react-icons/ai";
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaLinux,
    FaShieldAlt,
    FaTerminal,
} from "react-icons/fa";
import { 
    SiGnubash,
    SiArchlinux,
    SiMongodb,
    SiRedux,
} from "react-icons/si";




const Portifolio = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('all');

    const projects = [
        {
            category: 'fullstack',
            img: bytedesabor,
            title: t('portfolio.projects.0.title'),
            description: t('portfolio.projects.0.description'),
            skills: [
                <FaReact key="react" />,
                <SiRedux key="redux" />,
                <FaJs key="javascript" />,
                <SiMongodb key="mongodb" />,
            ],
            links: {
                site: 'https://bytedesabor.vercel.app/',
                github: 'https://github.com/paulemacedo/bytedesabor',
            }
        },
        {
            category: 'automation',
            img: Archemy,
            title: t('portfolio.projects.1.title'),
            skills: [
                <SiGnubash key="bash" />,
                <FaLinux key="linux" />,
                <SiArchlinux key="archlinux" />,
            ],
            description: t('portfolio.projects.1.description'),
            links: {
                site: '',
                github: 'https://github.com/paulemacedo/Archemy',
            }
        },
        {
            category: 'cybersecurity',
            img: CTF,
            title: t('portfolio.projects.2.title'),
            skills: [],
            description: t('portfolio.projects.2.description'),
            links: {
                site: '',
                github: 'https://github.com/paulemacedo/CTF',
            }
        },
        {
            category: 'automation',
            img: null,
            title: t('portfolio.projects.3.title'),
            skills: [
                <FaPython key="python" />,
                <FaHtml5 key="html" />,
                <FaCss3Alt key="css" />,
            ],
            description: t('portfolio.projects.3.description'),
            links: {
                site: '',
                github: 'https://github.com/paulemacedo/cvgen',
            }
        },
    ];

    const categories = [
        { id: 'all', label: t('portfolio.filters.all'), icon: null },
        { id: 'fullstack', label: t('portfolio.filters.fullstack'), icon: <FaReact /> },
        { id: 'cybersecurity', label: t('portfolio.filters.cybersecurity'), icon: <FaShieldAlt /> },
        { id: 'automation', label: t('portfolio.filters.automation'), icon: <FaTerminal /> },
    ];

    const visibleProjects = activeCategory === 'all'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    const renderLinks = (project, showGithub = true) => (
        <div className="flex space-x-4">
            {project.links.site && <a href={project.links.site} target="_blank" rel="noopener noreferrer"
                className="text-gray-200 px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 transition duration-300">
                Visit Site</a>}
            {showGithub && project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
                aria-label={`GitHub - ${project.title}`}>
                <AiFillGithub className="text-2xl"/>
            </a>}
        </div>
    );

    const renderSkills = (project, className = "ml-4") => (
        <span className={`${className} flex space-x-2`}>
            {project.skills.map((skill, skillIndex) => (
                <span key={`${project.title}-skill-${skillIndex}`}>{skill}</span>
            ))}
        </span>
    );

    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>{t('portfolio.title')}</h1>
            <div className="flex flex-wrap justify-center items-center gap-2 mb-14" role="tablist" aria-label={t('portfolio.filters.label')}>
                {categories.map((category) => (
                    <React.Fragment key={category.id}>
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'border-purple-400 bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                                    : 'border-purple-900/60 bg-purple-950/30 text-gray-300 hover:border-purple-500/70 hover:bg-purple-900/40 hover:text-white'
                            }`}
                        >
                            {category.icon && <span className="text-base text-inherit">{category.icon}</span>}
                            {category.label}
                        </button>
                        {category.id !== 'automation' && <span className="hidden sm:block text-purple-800/80">|</span>}
                    </React.Fragment>
                ))}
            </div>
            {visibleProjects.map((project, index) => (
                <Reveal key={index}>
                    {project.category === 'fullstack' ? (
                        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                            <div className="w-full md:w-1/2">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                            </div>
                            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                                    {project.title}
                                    {renderSkills(project)}
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                {renderLinks(project)}
                            </div>
                        </div>
                    ) : (
                        <div className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''} mb-12`}>
                            <div className="w-full sm:w-1/4 sm:pt-4">
                                {project.img ? (
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-32 sm:h-36 object-cover rounded-lg opacity-80"
                                    />
                                ) : (
                                    <div className="w-full h-32 sm:h-36 rounded-lg bg-slate-800/50 flex items-center justify-center text-5xl text-purple-500/70">
                                        <FaPython aria-hidden="true" />
                                    </div>
                                )}
                            </div>
                            <div className="w-full sm:w-3/4 p-4 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                                    {project.title}
                                    <span className="ml-3 flex items-center gap-3">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gray-800 text-gray-200 p-1.5 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
                                                aria-label={`GitHub - ${project.title}`}
                                            >
                                                <AiFillGithub />
                                            </a>
                                        )}
                                        {project.links.github && project.skills.length > 0 && (
                                            <span className="h-6 w-px bg-gradient-to-b from-transparent via-purple-300/40 to-transparent" aria-hidden="true" />
                                        )}
                                        {renderSkills(project, "ml-0")}
                                    </span>
                                </h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                {renderLinks(project, false)}
                            </div>
                        </div>
                    )}
                </Reveal>
            ))}
        </div>
    )
}

export default Portifolio;