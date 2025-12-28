"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { distinctionsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Distinctions() {
  const { ref } = useSectionInView("Distinctions");
  const { theme } = useTheme();

  return (
    <section
      id="distinctions"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>Distinctions & Scholarships</SectionHeading>

      <ul className="mt-10 space-y-6">
        {distinctionsData.map((item, index) => (
          <li
            key={index}
            className={`rounded-lg border p-6 ${
              theme === "light"
                ? "bg-gray-100 border-black/5"
                : "bg-white/5 border-white/10"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="text-xl">{item.icon}</div>

              <div>
                <h3 className="font-semibold">{item.title}</h3>

                <p className="text-sm text-gray-600 dark:text-white/70">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-white/60">
                  {item.description}
                </p>

                {"link" in item && item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm underline text-blue-600 dark:text-blue-400"
                  >
                    View publication
                  </a>
                )}

                <span className="mt-2 block text-xs text-gray-400">
                  {item.date}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
