"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

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
        After being exposed to various programming languages at school, I found
        myself deeply interested in{" "}
        <span className="font-medium">website development.</span> Therefore, by
        2023, I focused on <span className="italic">frontend development</span>{" "}
        and learned <span className="font-medium">React and Next.js.</span>{" "}
        During this time, I also became familiar with{" "}
        <span className="font-medium">TypeScript and Prisma.</span> In 2024, I
        started learning <span className="italic">backend development</span>{" "}
        frameworks such as{" "}
        <span className="font-medium">Node.js, Express, and MongoDB</span> to
        fulfill my goal of becoming a{" "}
        <span className="italic">full-stack developer.</span> I also attend
        technology seminars such as{" "}
        <span className="font-medium">
          AWS, Web3, and Google Cloud Console,
        </span>{" "}
        to keep pace with the latest technological advancements. I am currently
        looking for a{" "}
        <span className="font-medium">Internship job opportunity</span> as a
        software developer.
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
