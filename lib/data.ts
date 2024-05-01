import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import gogreenImg from "@/public/webGoGreen.png";
import gamehubImg from "@/public/webGameHub.png";
import issuetrackerImg from "@/public/webIssueTracker.png";

// Nav links
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
    name: "Contact",
    hash: "#contact",
  },
] as const; //more percise, be exactly as it's written, instead of random string {name: string, hash: string}[]

export const experiencesData = [
  {
    title: "Adia Pasific University",
    location: "Bukit Jalil, KL",
    description:
      "I study at APU d with Diploma in Information & Communication Technology with a specialism in Software Engineering. ",
    icon: React.createElement(LuGraduationCap), //<LuGraduationCap/> not allow in the ts file as is an component
    date: "2022",
  },
  {
    title: "Front-End Development",
    location: "codewithmosh by Mosh Hamedani",
    description:
      "Studying React and Next.js with TypeScript involves not only understanding their core concepts but also applying them effectively in website development.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Back-End Development",
    location: "codewithmosh by Mosh Hamedani",
    description:
      "Studying JavaScript based framework, Express, MongoDB, Node.js. Striving forward on the path to becoming a full-stack developer.",
    icon: React.createElement(FaNodeJs),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "GoGreen",
    description:
      "A dynamically full-stack website for school assignment. It is separated to user and admin interfaces.Three.js also applied for the design.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Three.js"],
    imageUrl: gogreenImg,
  },
  {
    title: "Game-Hub",
    description:
      "A React website built by fetching API keys, featuring search, filter, and sort functions. It utilizes various libraries including Axios, Zustand, and TanStack Query.",
    tags: ["React", "TypeScript", "Axios", "BootStrap", "Chakra.UI"],
    imageUrl: gamehubImg,
  },
  {
    title: "Issue-Tracker",
    description:
      "Admin dashboard that can assign issue to user by Google Account. Use Prisma to integrate with a database, also implement user authentication with NextAuth.js",
    tags: ["React", "Next.js", "Prisma", "MySQL", "Tailwind", "NextAuth"],
    imageUrl: issuetrackerImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PHP",
  "Bootstrap",
  "Express",
  "Next Auth",
  "Python",
  "Framer Motion",
] as const;
