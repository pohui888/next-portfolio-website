import affordImg from '@/public/Afford.png';
import alphaPropertyImg from '@/public/AlphaProperty.png';
import openDevImg from '@/public/OpenDev.png';
import gamehubImg from '@/public/webGameHub.png';
import issuetrackerImg from '@/public/webIssueTracker.png';
import React from 'react';
import { FaReact } from 'react-icons/fa';
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { LuGraduationCap } from 'react-icons/lu';

// Nav links
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const; //more percise, be exactly as it's written, instead of random string {name: string, hash: string}[]

export const experiencesData = [
  {
    title: 'Adia Pacific University',
    location: 'Bukit Jalil, Kuala Lumpur',
    description:
      'Studying at APU with Diploma in Information & Communication Technology with specialism in Software Engineering. ',
    icon: React.createElement(LuGraduationCap), //<LuGraduationCap/> not allow in the ts file as is an component
    date: '2022-2024',
  },
  {
    title: 'React Developer Internship',
    location: 'D7 Offices Sentul East',
    description:
      'During my internship, I participated in building a new project from scratch, collaborating with other teams to develop a fully functional live website. I was responsible for developing the user-facing frontend interface.',
    icon: React.createElement(FaReact),
    date: ' Aug - Nov, 2024',
  },
  {
    title: 'Freelance',
    location: 'Skudai, Johor',
    description:
      'After my internship, I took on some freelance projects through referrals from friends, primarily focusing on frontend development.',
    icon: React.createElement(LiaLaptopCodeSolid),
    date: '2025',
  },
] as const;

export const projectsData = [
  // https://game-hub-nine-wheat.vercel.app/
  {
    title: 'Game Hub',
    description:
      'A React website built by fetching API keys, featuring search, filter, and sort functions. It utilizes various libraries including Axios, Zustand, and TanStack Query.',
    tags: ['React', 'TypeScript', 'Axios', 'BootStrap', 'Chakra.UI'],
    imageUrl: gamehubImg,
  },

  // ...no hosting
  {
    title: 'Issue Tracker',
    description:
      'Admin dashboard that can assign issue to user by Google Account. Use Prisma to integrate with a database, also implement user authentication with NextAuth.js',
    tags: ['React', 'Next.js', 'Prisma', 'MySQL', 'Tailwind', 'NextAuth'],
    imageUrl: issuetrackerImg,
  },

  // https://listing.alphabridgeco.com/
  {
    title: 'Alpha Property',
    description:
      'A real estate website that integrates data from the backend using GraphQL APIs. It focuses on various filter functions to ensure data is fetched more accurately.',
    tags: ['Next.js', 'GraphQL', 'SEO', 'TypeScript', 'Tailwind'],
    imageUrl: alphaPropertyImg,
  },

  // https://afford-frontend.vercel.app/
  {
    title: 'Afford',
    description:
      'A car management system featuring three interfaces: client, admin, and mechanic. These three roles are interconnected, enabling seamless interaction and functionality.',
    tags: ['React', 'JavaScript', 'MongoDB', 'Express', 'NodeJS'],
    imageUrl: affordImg,
  },

  //...no hosting
  {
    title: 'OpenDev Website',
    description:
      "A freelance project that developing a website with a modern user interface designed to showcase the client's services effectively.",
    tags: ['Next.js', 'TypeScript', 'Shadcn', 'Tailwind', 'Aceternity UI'],
    imageUrl: openDevImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'MySQL',
  'GraphQL',
  'Express',
  'Next Auth',
  'Python',
  'Radix UI',
  'Shadcn',
  'Zustand',
] as const;
