/* eslint-disable react/prop-types */
import { FaReact, FaShieldAlt, FaTerminal } from "react-icons/fa";

const filterIcons = {
    fullstack: FaReact,
    cybersecurity: FaShieldAlt,
    automation: FaTerminal,
};

const ProjectFilters = ({ categories, activeCategory, onCategoryChange }) => (
    <div
        className="flex flex-wrap justify-center items-center gap-2 mb-14"
        role="tablist"
        aria-label={categories.label}
    >
        {categories.items.map((category, index) => {
            const Icon = filterIcons[category.id];

            return (
                <span key={category.id} className="contents">
                    <button
                        type="button"
                        role="tab"
                        aria-selected={activeCategory === category.id}
                        onClick={() => onCategoryChange(category.id)}
                        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            activeCategory === category.id
                                ? "border-purple-400 bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                                : "border-purple-900/60 bg-purple-950/30 text-gray-300 hover:border-purple-500/70 hover:bg-purple-900/40 hover:text-white"
                        }`}
                    >
                        {Icon && <span className="text-base text-inherit"><Icon /></span>}
                        {category.label}
                    </button>
                    {index < categories.items.length - 1 && (
                        <span className="hidden sm:block text-purple-800/80">|</span>
                    )}
                </span>
            );
        })}
    </div>
);

export default ProjectFilters;