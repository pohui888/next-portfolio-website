"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number]; // [number]: read all the data in projectsData{}[]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null); // need to provide the <element>, target the ref and passed it to the section
  const { scrollYProgress } = useScroll({
    target: ref, // where should start? the section div.
    offset: ["0 1", "1.33 1"], //start: bottom of the view point(0) crosses the top of target(1); end: when the bottom of the viewpoint has gone 33% beyond the end of the project(1 + 0.33%)
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // transform use in scale -> ...; start scale , end scale
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // transform use in opacity -> ...; start opacity, end opacity

  return (
    <motion.div
      ref={ref} // for the useScroll to target this ref
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0" // group the contain as each
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on."
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[30rem] h-[18rem] rounded-t-lg rounded-b-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40" // group-even: when the div(group) is even number(2,4,6), place it at left
        />
      </section>
    </motion.div>
  );
}

//  w-[28.25rem]
