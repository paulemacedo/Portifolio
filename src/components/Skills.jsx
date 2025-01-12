import React from "react";
import Reveal from "./Reveal";

import { 
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiReact,
    DiGithubBadge,
    DiPython,
    DiRust,
    DiLinux,
    DiUnitySmall,
} from "react-icons/di";

import { 
    SiWireshark,
    SiKalilinux,
    SiTailwindcss,
    SiBurpsuite,
    SiGnubash,
    SiFigma,
    SiDavinciresolve,
    SiCplusplus,
} from "react-icons/si";

const skills = [
    {
        category: 'Frontend',
        technologies: [
            { name: 'HTML5', icon: <DiHtml5 className="text-orange-600" /> },
            { name: 'CSS3', icon: <DiCss3 className="text-blue-600" /> },
            { name: 'JavaScript', icon: <DiJavascript className="text-yellow-500" /> },
            { name: 'React', icon: <DiReact className="text-blue-500" /> },
        ],
    },
    {
        category: 'Backend',
        technologies: [
            { name: 'Python', icon: <DiPython className="text-blue-500" /> },
            { name: 'Rust', icon: <DiRust className="text-orange-500" /> },
            { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
        ],
    },
    {
        category: 'Cybersecurity & Infrastructure',
        technologies: [
            { name: 'GitHub', icon: <DiGithubBadge className="text-white" /> },
            { name: 'Linux', icon: <DiLinux className="text-white" /> },
            { name: 'Bash', icon: <SiGnubash className="text-white" /> },
            { name: 'Wireshark', icon: <SiWireshark className="text-blue-500" /> },
            { name: 'Kali', icon: <SiKalilinux className="text-blue-500" /> },

        ],
    },
    {
        category: 'Design & creativity',
        technologies: [
            { name: 'Unity', icon: <DiUnitySmall className="text-gray-500" /> },
            { name: 'DaVinci', icon: <SiDavinciresolve className="text-white" /> },
            { name: 'Figma', icon: <SiFigma className="text-white" /> },
        ],
    },
];




const Skills = () => {
    return (
        <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
            <Reveal>
                <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
                <p className='text-center mb-8'>
                    I have experience with the following technologies:
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/2 shadow-lg'>
                            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                {skill.technologies.map((tech, idx) => (
                                    <div key={idx} className='flex items-center space-x-2' >
                                        <span className='text-2xl'>{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}                                    
                            </div>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}

export default Skills;