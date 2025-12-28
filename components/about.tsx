"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
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
   <SectionHeading>About me</SectionHeading>

<p className="mb-3">
  I hold a{" "}
  <span className="font-medium">Software Engineering degree</span> from the{" "}
  <span className="font-medium">
    National Engineering School of Carthage (ENICarthage), Tunisia
  </span>
  . Throughout my studies and professional experience, I have worked on a wide
  range of{" "}
  <span className="italic">
    software development, programming, and web development projects
  </span>
  , which helped me build strong foundations in{" "}
  <span className="font-medium">software engineering principles</span>.
</p>

<p className="mb-3">
  I am currently pursuing an{" "}
  <span className="font-medium">MSc in Computer Science</span> at the University
  of Sherbrooke, Canada, where I also work as a{" "}
  <span className="font-medium">Research Assistant</span> at the Domus Lab. My
  current work combines{" "}
  <span className="underline">
    software development, data processing, and applied machine learning
  </span>{" "}
  to design and evaluate reliable and scalable systems for real-world
  applications.
</p>

<p>
  <span className="italic">What I enjoy most about software engineering</span>{" "}
  is problem solving and turning complex ideas into working solutions. I am
  comfortable working across different layers of a system, from implementation
  and debugging to experimentation and evaluation, and I value{" "}
  <span className="font-medium">
    clean code, robustness, and continuous learning
  </span>
  .
</p>

    </motion.section>
  );
}
