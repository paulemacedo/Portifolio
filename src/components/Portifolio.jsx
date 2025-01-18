import Archemy from "../assets/Archemy.png";
import pybank from "../assets/pyBank.png";
import bytedesabor from "../assets/bytedesabor.png";
import CTF from "../assets/CTF.png";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import React from "react";

const projects = [
    {
        img: bytedesabor,
        title: 'Byte de Sabor',
        description: 'Byte de Sabor is a açai store website developed using React. It features a modern and responsive design, showcasing the store’s products and services. This project demonstrates my proficiency in front-end development and my ability to create visually appealing and user-friendly websites.',
        links: {
            site: 'bytedesabor.vercel.app/',
            github: 'https://github.com/paulemacedo/bytedesabor',
        }
    },
    {
        img: Archemy,
        title: 'Archemy',
        description: 'A Linux installation and configuration script tailored for Arch Linux. It supports package installation via Pacman, Paru, Yay, APT, DNF, or Flatpak with automatic package manager detection. Developed using Bash.',
        links: {
            site: 'https://github.com/paulemacedo/Archemy',
            github: 'https://github.com/paulemacedo/Archemy',
        }
    },
    {
        img: CTF,
        title: 'Capture the Flag [CTF]',
        badge: 'https://tryhackme-badges.s3.amazonaws.com/paulemacedo.png',
        description: 'Dive into my journey in the world of Capture the Flag (CTF) challenges. This repository is a curated collection of CTF challenges, writeups, and resources that I have tackled to enhance my cybersecurity skills. Each challenge represents a step forward in my quest to master the art of cybersecurity, showcasing my progress and the knowledge gained along the way.',
        links: {
            site: 'https://github.com/paulemacedo/CTF',
            github: 'https://github.com/paulemacedo/CTF',
        }
    },
    {
        img: pybank,
        title: 'PyBank',
        description: 'PyBank is a Python-based banking system project showcasing my skills in developing robust financial applications. It features account management, transaction handling, and user authentication. This project demonstrates my proficiency in Python and my ability to create reliable, secure, and efficient software solutions.',
        links: {
            site: 'https://github.com/paulemacedo/PyBank',
            github: 'https://github.com/paulemacedo/PyBank',
        }
    },
];




const Portifolio = () => {
    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12' >Projects</h1>
            {projects.map((project, index) => (
                <Reveal>
                    <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        <div className="w-full md:w-1/2 p-4">
                            <img 
                            src={project.img} 
                            alt={project.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg" 
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex space-x-4">
                                <a href={project.links.site} 
                                    className="text-gray-200 px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 transition duration-300">
                                    Visit Site</a>
                                <a href={project.links.github} 
                                    className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg flex items-center">
                                    <AiFillGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}

export default Portifolio