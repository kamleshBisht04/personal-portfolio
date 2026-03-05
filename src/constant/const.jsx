import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaChrome,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiVercel,
  SiNetlify,
  SiMysql,
  SiAxios,
  SiFramer,
  SiWebpack,
  SiVite,
} from "react-icons/si";


export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skill", label: "Skill" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/kamleshBisht04" },
  { icon: Linkedin, href: "https://github.com/kamleshBisht04" },
  { icon: Mail, href: "https://github.com/kamleshBisht04" },
];


// hero section data 
export const skillsData = [
  // ---------------- FRONTEND ----------------
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Frontend" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
  },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", category: "Frontend" },
  {
    name: "React Router",
    icon: FaReact,
    color: "#CA4245",
    category: "Frontend",
  },
  { name: "Axios", icon: SiAxios, color: "#5A29E4", category: "Frontend" },
  { name: "Fetch API", icon: FaJs, color: "#F7DF1E", category: "Frontend" },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    category: "Frontend",
  },

  // ---------------- BACKEND ----------------
  { name: "Node.js", icon: FaNodeJs, color: "#339933", category: "Backend" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Backend" },
  { name: "Python", icon: FaPython, color: "#3776AB", category: "Backend" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Backend" },

  // ---------------- DATABASE ----------------
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    category: "Database",
  },

  // ---------------- TOOLS ----------------
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Tools" },
  { name: "GitHub", icon: FaGithub, color: "#000000", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "#000000", category: "Tools" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", category: "Tools" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Tools" },
  {
    name: "Webpack (Basic)",
    icon: SiWebpack,
    color: "#8DD6F9",
    category: "Tools",
  },
  {
    name: "Chrome DevTools",
    icon: FaChrome,
    color: "#4285F4",
    category: "Tools",
  },
];
export const categories = ["Frontend", "Backend", "Database", "Tools"];

// for about section

export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];


// project data

export const projects = [
  {
    id: 1,
    title: "Eatigo",
    slug: "eatigo",
    description:
      "A modern restaurant booking platform with real-time availability, responsive UI, and seamless reservation experience.",
    image: "/projects/eatigo.jpg",
    tags: ["React", "Node.js", "React-Router", "Tailwind CSS"],
    category: "Frontend",
    featured: true,
    demoUrl: "https://eatigosmartdine.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/Eatigo",
  },
  {
    id: 2,
    title: "Intellect-quiz-app",
    slug: "quiz-app",
    description:
      "An interactive quiz application with timer functionality, score tracking, and dynamic question rendering.",
    image: "/projects/quiz-app.jpg",
    tags: ["React", "Context API", "firebase", "Hooks", "CSS"],
    category: "Frontend",
    featured: false,
    demoUrl: "https://intellect-quiz.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/React-quiz-app",
  },
  {
    id: 3,
    title: "WorldWise",
    slug: "worldwise",
    description:
      "A travel tracking application that allows users to mark and manage visited cities with map integration.",
    image: "/projects/worldwise.jpg",
    tags: ["React", "Leaflet", "REST API"],
    category: "Web App",
    featured: false,
    demoUrl: "https://worldwise-travelsmart.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/worldwise",
  },
  {
    id: 4,
    title: "Omnifood",
    slug: "omnifood",
    description:
      "A fully responsive food delivery landing page built with modern UI principles and performance optimization.",
    image: "/projects/omnifood.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Landing Page",
    featured: true,
    demoUrl: "https://omnifood-website-ui.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/Omnifood-Project",
  },
  {
    id: 5,
    title: "usePopcorn",
    slug: "usepopcorn",
    description:
      "A movie search application integrated with an external OMDBi API, allowing users to rate and track watched movies.",
    image: "/projects/usepopcorn.jpg",
    tags: ["React", "Custom Hooks", "API Integration"],
    category: "Web App",
    featured: false,
    demoUrl: "https://usepopcone.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/usePopcorn",
  },
  {
    id: 6,
    title: "Agency-ai",
    slug: "agency-ai",
    description:
      "An agency landing page is a single webpage designed to present a digital agency, web agency, or marketing agency and convert visitors into clients or leads..",
    image: "/projects/agency-ai.jpg",
    tags: ["React", "Custom Hooks", "farmaer motion", "Tailwind css"],
    category: "Landing page",
    featured: false,
    demoUrl: "https://agency-ai-page.netlify.app/",
    githubUrl: "https://github.com/kamleshBisht04/agency.ai-",
  },
];
