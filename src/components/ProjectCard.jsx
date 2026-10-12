/* eslint-disable react/prop-types */
import { AiFillGithub } from "react-icons/ai";
import {
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaLinux,
    FaPython,
    FaReact,
} from "react-icons/fa";
import {
    SiArchlinux,
    SiGnubash,
    SiMongodb,
    SiRedux,
} from "react-icons/si";

const technologyIcons = {
    archlinux: SiArchlinux,
    bash: SiGnubash,
    css: FaCss3Alt,
    html: FaHtml5,
    javascript: FaJs,
    linux: FaLinux,
    mongodb: SiMongodb,
    python: FaPython,
    react: FaReact,
    redux: SiRedux,
};

const ProjectSkills = ({ technologies, title, className = "ml-4" }) => (
    <span className={`${className} flex space-x-2`}>
        {technologies.map((technology) => {
            const Icon = technologyIcons[technology];
            return Icon ? <Icon key={`${title}-${technology}`} /> : null;
        })}
    </span>
);

const ProjectLinks = ({ links, title, showGithub = true }) => (
    <div className="flex space-x-4">
        {links.site && (
            <a
                href={links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 px-4 py-2 rounded-lg bg-slate-600 hover:bg-slate-700 transition duration-300"
            >
                Visit Site
            </a>
        )}
        {showGithub && links.github && (
            <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-gray-200 px-3 py-2 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
                aria-label={`GitHub - ${title}`}
            >
                <AiFillGithub className="text-2xl" />
            </a>
        )}
    </div>
);

const GithubLink = ({ href, title }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-gray-200 p-1.5 rounded-lg flex items-center hover:bg-gray-700 transition duration-300"
        aria-label={`GitHub - ${title}`}
    >
        <AiFillGithub />
    </a>
);

const ProjectCategoryLabel = ({ categoryLabel }) => (
    categoryLabel ? (
        <span className="text-sm font-medium uppercase tracking-wider text-purple-300/80 mb-1">
            {categoryLabel}
        </span>
    ) : null
);

const ProjectImage = ({ project, title, compact = false }) => (
    <div className="w-full aspect-[1.57]">
        {project.image ? (
            <img
                src={project.image}
                alt={title}
                className={`w-full h-full object-contain rounded-lg ${compact ? "opacity-80" : "shadow-lg"}`}
            />
        ) : (
            <div className="w-full h-full rounded-lg bg-slate-800/50 flex items-center justify-center text-5xl text-purple-500/70">
                <FaPython aria-hidden="true" />
            </div>
        )}
    </div>
);

const FeaturedProjectCard = ({ project, title, description, reverse, categoryLabel }) => (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} mb-12`}>
        <div className="w-full md:w-1/2">
            <ProjectImage project={project} title={title} />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <ProjectCategoryLabel categoryLabel={categoryLabel} />
            <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                {title}
                <ProjectSkills technologies={project.technologies} title={title} />
            </h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <ProjectLinks links={project.links} title={title} />
        </div>
    </div>
);

const CompactProjectCard = ({ project, title, description, categoryLabel }) => (
    <div className="flex flex-col sm:flex-row mb-12">
        <div className="w-full sm:w-1/4 sm:pt-4">
            <ProjectImage project={project} title={title} compact />
        </div>
        <div className="w-full sm:w-3/4 p-4 flex flex-col justify-center">
            <ProjectCategoryLabel categoryLabel={categoryLabel} />
            <h3 className="text-2xl font-semibold text-gray-200 mb-4 flex items-center">
                {title}
                <span className="ml-3 flex items-center gap-3">
                    {project.links.github && <GithubLink href={project.links.github} title={title} />}
                    {project.links.github && project.technologies.length > 0 && (
                        <span className="h-6 w-px bg-gradient-to-b from-transparent via-purple-300/40 to-transparent" aria-hidden="true" />
                    )}
                    <ProjectSkills technologies={project.technologies} title={title} className="ml-0" />
                </span>
            </h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <ProjectLinks links={project.links} title={title} showGithub={false} />
        </div>
    </div>
);

const projectVariants = {
    featured: FeaturedProjectCard,
    compact: CompactProjectCard,
};

const ProjectCard = ({ project, variant, title, description, reverse, categoryLabel }) => {
    const Variant = projectVariants[variant];

    if (!Variant) {
        throw new Error(`Unknown project card variant: ${variant}`);
    }

    return (
        <Variant
            project={project}
            title={title}
            description={description}
            reverse={reverse}
            categoryLabel={categoryLabel}
        />
    );
};

export default ProjectCard;
