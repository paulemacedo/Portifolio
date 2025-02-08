import React from "react";
import Reveal from "./Reveal";
import { useTranslation } from 'react-i18next';
import { FcLinux } from "react-icons/fc";
import { 
    DiCss3,
    DiHtml5,
    DiJavascript,
    DiReact,
    DiGithubBadge,
    DiPython,
    DiRust,
    DiNodejsSmall,
    DiUnitySmall,
} from "react-icons/di";
import { 
    SiWireshark,
    SiKalilinux,
    SiTailwindcss,
    SiBurpsuite,
    SiGnubash,
    SiFigma,
    SiRedux,
    SiGimp,
    SiDavinciresolve,
    SiCplusplus,
    SiMongodb,
    SiFastapi,
} from "react-icons/si";



const Skills = () => {

    const { t } = useTranslation();

    const skills = [
        {
            category: t('skills.cybersecurity'),
            technologies: [
                { name: 'Linux', icon: <FcLinux /> },
                { name: 'Kali', icon: <SiKalilinux className="text-blue-500" /> },            

                { name: 'Burp Suite', icon: <SiBurpsuite className="text-white" /> },
                { name: 'Wireshark', icon: <SiWireshark className="text-blue-500" /> },
            ],
        },
        {
            category: t('skills.backend'),
            technologies: [
                { name: 'Python', icon: <DiPython className="text-blue-500" /> },
                { name: 'Bash', icon: <SiGnubash className="text-white" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
                { name: 'Node.js', icon: <DiNodejsSmall className="text-green-500" /> },

  
                // { name: 'Rust', icon: <DiRust className="text-orange-500" /> },
                // { name: 'FastAPI', icon: <SiFastapi className="text-white" /> },
                // { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
                // { name: 'GitHub', icon: <DiGithubBadge className="text-white" /> },
            ],
        },
        {
            category: t('skills.frontend'),
            technologies: [
                { name: 'HTML5', icon: <DiHtml5 className="text-orange-600" /> },
                { name: 'CSS3', icon: <DiCss3 className="text-blue-600" /> },
                { name: 'JavaScript', icon: <DiJavascript className="text-yellow-500" /> },
                { name: 'React', icon: <DiReact className="text-blue-500" /> },

                // { name: 'Tailwind', icon: <SiTailwindcss className="text-blue-500" /> },
                // { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },

            ],
        },
        {
            category: t('skills.design_creativity'),
            technologies: [
                { name: 'Figma', icon: <SiFigma className="text-white" /> },
                { name: 'DaVinci', icon: <SiDavinciresolve className="text-white" /> },
                { name: 'Unity', icon: <DiUnitySmall className="text-white" /> },
                { name: 'GIMP', icon: <SiGimp className="text-white" /> },
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

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
                    {skills.map((skill, index) => (
                        <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/2 shadow-lg'>
                            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                            <div className='grid grid-cols-2 gap-8'>
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