import Archemy from "../assets/Archemy.png";
import bytedesabor from "../assets/bytedesabor.png";
import caseflux from "../assets/Caseflux.png";
import CTF from "../assets/CTF.png";
import cvgen from "../assets/cvgen.png";

export const projects = [
    {
        id: "caseflux",
        category: "fullstack",
        variant: "featured",
        image: caseflux,
        translationKey: 0,
        technologies: ["html", "css", "javascript"],
        links: {
            site: "https://caseflux.vercel.app/",
            github: "https://github.com/paulemacedo/caseflux",
        },
    },
    {
        id: "bytedesabor",
        category: "fullstack",
        variant: "featured",
        image: bytedesabor,
        translationKey: 1,
        technologies: ["react", "redux", "javascript", "mongodb"],
        links: {
            site: "https://bytedesabor.vercel.app/",
            github: "https://github.com/paulemacedo/bytedesabor",
        },
    },
    {
        id: "archemy",
        category: "automation",
        variant: "compact",
        image: Archemy,
        translationKey: 2,
        technologies: ["bash", "linux", "archlinux"],
        links: {
            site: "",
            github: "https://github.com/paulemacedo/Archemy",
        },
    },
    {
        id: "ctf",
        category: "cybersecurity",
        variant: "compact",
        image: CTF,
        translationKey: 3,
        technologies: [],
        links: {
            site: "",
            github: "https://github.com/paulemacedo/CTF",
        },
    },
    {
        id: "cvgen",
        category: "automation",
        variant: "compact",
        image: cvgen,
        translationKey: 4,
        technologies: ["python", "html", "css"],
        links: {
            site: "",
            github: "https://github.com/paulemacedo/cvgen",
        },
    },
];
