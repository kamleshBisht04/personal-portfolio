import { Github, Linkedin, Mail } from "lucide-react";
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

export const socialLinks = [
  { icon: Github, href: "https://github.com/kamleshBisht04" },
  { icon: Linkedin, href: "https://github.com/kamleshBisht04" },
  { icon: Mail, href: "https://github.com/kamleshBisht04" },
];

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
