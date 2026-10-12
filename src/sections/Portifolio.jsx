import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectFilters from "../components/ProjectFilters";
import Reveal from "../components/Reveal";

const Portifolio = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = {
        label: t("portfolio.filters.label"),
        items: [
            { id: "all", label: t("portfolio.filters.all") },
            { id: "fullstack", label: t("portfolio.filters.fullstack") },
            { id: "cybersecurity", label: t("portfolio.filters.cybersecurity") },
            { id: "automation", label: t("portfolio.filters.automation") },
        ],
    };

    const categoryLabels = {
        fullstack: t("portfolio.filters.fullstack"),
        cybersecurity: t("portfolio.filters.cybersecurity"),
        automation: t("portfolio.filters.automation"),
    };
    const categoryOrder = ["fullstack", "automation", "cybersecurity"];

    const renderProject = (project, index, categoryLabel = null) => (
        <Reveal key={project.id}>
            <ProjectCard
                project={project}
                variant={project.variant}
                categoryLabel={categoryLabel}
                title={t(`portfolio.projects.${project.translationKey}.title`)}
                description={t(`portfolio.projects.${project.translationKey}.description`)}
                reverse={project.category === "fullstack" && index % 2 === 0}
            />
        </Reveal>
    );

    const renderAllProjects = () => categoryOrder.map((category) => {
        const categoryProjects = projects.filter((project) => project.category === category);
        const displayedProjects = categoryProjects.slice(0, 3);

        if (categoryProjects.length === 0) {
            return null;
        }

        return (
            <section key={category} className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-semibold text-purple-300">
                        {categoryLabels[category]}
                    </h2>
                    {categoryProjects.length > 3 && (
                        <button
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className="text-sm text-purple-300 hover:text-purple-100 transition-colors"
                        >
                            {t("portfolio.filters.see_all")}
                        </button>
                    )}
                </div>
                {displayedProjects.map((project, index) => renderProject(project, index))}
            </section>
        );
    });

    const visibleProjects = projects.filter((project) => project.category === activeCategory);

    return (
        <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
            <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
                {t("portfolio.title")}
            </h1>
            <ProjectFilters
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />
            {activeCategory === "all"
                ? renderAllProjects()
                : visibleProjects.map((project, index) => renderProject(project, index))}
        </div>
    );
};

export default Portifolio;
