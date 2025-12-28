import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
  name: "Distinctions",
  hash: "#distinctions",
},
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research Assistant",
    location: "DOMUS Lab, University of Sherbrooke, Canada",
    description:
      "Conducting research on LiDAR-based person detection and tracking in smart indoor environments. Working on data collection, algorithm analysis, and evaluation of detection and tracking methods, while collaborating with an interdisciplinary research team.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2024 – Present",
  },
  {
    title: "IT Consultant",
    location: "M&C IT Consulting (AMADEUS), Tunis, Tunisia",
    description:
      "Worked on interline airline systems by performing technical investigations, resolving operational issues, and developing automation scripts using Python, Unix, and SQL. Contributed to system reliability and technical documentation.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 – Aug 2024",
  },
  {
    title: "R&D Research Intern (Mitacs Globalink)",
    location: "Université du Québec à Rimouski (Lévis), Canada",
    description:
      "Developed a biometric iris authentication system combining deep learning feature extraction with machine learning techniques (One-Class SVM). Conducted literature review, dataset preparation, model evaluation, and contributed to an IEEE conference paper.",
    icon: React.createElement(LuGraduationCap),
    date: "Feb 2023 – Jul 2023",
  },
  {
    title: "Software Engineering Intern",
    location: "PROXYM IT, Sousse, Tunisia",
    description:
      "Designed and implemented a full-stack event management platform using Spring Boot and Angular. Worked on user management, role-based authentication with JWT, API documentation with Swagger, and collaborative development using Git.",
    icon: React.createElement(FaReact),
    date: "Jun 2022 – Aug 2022",
  },
  {
    title: "Web Development Intern",
    location: "RUN-IT, Mahdia, Tunisia",
    description:
      "Developed and designed an e-commerce website while learning professional front-end development practices. Worked with HTML, CSS, JavaScript, PHP, and MySQL.",
    icon: React.createElement(FaReact),
    date: "Jun 2021 – Aug 2021",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  // Programming Languages
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "TypeScript",

  // Frontend Development
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Angular",
  "Tailwind CSS",
  "Redux",
  "Framer Motion",

  // Backend Development
  "Node.js",
  "Express",
  "Spring Boot",
  "Django",

  // Databases
  "MongoDB",
  "PostgreSQL",

  // APIs & Data
  "REST APIs",
  "GraphQL",

  // Software Engineering & Tools
  "Git",
  "Docker",
  "Linux",

  // Data & Applied Computing
  "Data Processing",
  "Machine Learning",
  "Computer Vision",
] as const;

export const distinctionsData = [
  {
    title: "Excellence Scholarship",
    institution: "Université de Sherbrooke, Canada",
    description:
      "Awarded for academic excellence and strong research potential during the MSc in Computer Science.",
    date: "Summer 2025",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Scientific Publication",
    institution: "Peer-reviewed research article",
    description:
      "Scientific research article listed on Google Scholar.",
    link:
      "https://scholar.google.com/citations?view_op=view_citation&hl=fr&user=1AtzqXMAAAAJ&citation_for_view=1AtzqXMAAAAJ:u5HHmVD_uO8C",
    date: "2023",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Research Poster",
    institution: "Poster presentation",
    description:
      "Academic research poster presented in an academic context.",
    link:
      "https://www.uqar.ca/app/uploads/2024/11/Poster_Hadil.pdf",
    date: "2024",
    icon: React.createElement(LuGraduationCap),
  },
] as const;


