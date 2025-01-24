'use client';

import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a recent graduate and a passionate{' '}
        <span className="font-medium">software developer.</span> During my
        2-year diploma program, I focused primarily on building{' '}
        <span className="font-medium">frontend development</span> skills while
        also gaining foundational knowledge in backend programming. To apply my
        learning to real-world projects, I chose a{' '}
        <span className="font-medium">frontend developer internship,</span>{' '}
        where I contributed to the development of commercial websites. Through
        this experience, I honed my ability to create responsive, user-friendly,
        and visually appealing applications while collaborating with
        cross-functional teams. I am eager to continue growing as a developer,
        exploring modern technologies, and contributing to impactful projects in
        the industry.
      </p>
      <p>
        <span className="font-medium italic">What's the future?</span> I would
        like to delve into WebGL and Three.js, combining them with web
        development to create more interactive webpages.
      </p>
    </motion.section>
  );
};

export default About;
