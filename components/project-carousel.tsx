"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index];
  const go = (step: number) =>
    setIndex((i) => (i + step + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
        <Image
          key={project.image}
          src={project.image}
          alt={project.title}
          fill
          priority={index === 0}
          sizes="(max-width:1024px) 100vw, 66vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
          <div>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/75">{project.meta}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/70">
              {String(index + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label="Project sebelumnya"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Project berikutnya"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-brand"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {PROJECTS.map((item, i) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Buka project ${item.title}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand" : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
