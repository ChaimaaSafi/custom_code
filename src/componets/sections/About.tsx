import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import me from "@/public/assets/about-me.jpg";

const SKILLS = [
  "React",
  "Typescript",
  "Material UI",
  "NextJs",
  "Content Layer",
  "Tailwind CSS",
  "Cypress",
  "Firebase",
  "Webflow",
  "Flowbite",
];

function About() {
  return (
    <section className="text-white" id="about">
      <div className="md:max-w-[1400px]  md:mx-auto h-full px-3 flex flex-col md:flex-row justify-between md:space-x-3  items-center">
        <div className="md:w-3/5 text-justify order-last md:order-first">
          <div>
            <h1 className="text-2xl capitalize font-semibold text-yellow-primary mb-5">
              About me
            </h1>
            <p className="text-base leading-8 font-normal">
              Hello, I`&apos;`m Chaimaa Safi, a front-end developer who is
              passionate about coding, programming, and exploring new
              possibilities. I find joy in constantly learning and trying new
              things in this dynamic domain. Alongside my love for technology, I
              also have a deep appreciation for travel, as it fuels my
              creativity and broadens my perspective.{" "}
              <span className="text-orange-hero font-light">
                Join me on this journey as I showcase my{" "}
                <Link
                  href="#work"
                  className="hover:text-white text-orange-hero transition-all duration-150"
                >
                  work
                </Link>{" "}
                and share my love for development
              </span>
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-xl capitalize font-semibold text-yellow-primary mb-3">
              Skills
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SKILLS.map((skill: string, index: number) => (
                <div key={index}>
                  <p className="text-base leading-8 font-normal">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-5 relative md:mb-0 md:w-[450px] md:h-[500px] h-[250px] w-[300px] rounded-lg">
            <Image
              src={me}
              alt="me"
              fill
              className="rounded-lg object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
