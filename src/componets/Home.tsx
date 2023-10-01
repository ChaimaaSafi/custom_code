import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import me from "@/public/assets/me.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/componets/core/Button";

function Home() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    //@ts-ignore
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      className="w-full flex justify-between items-center h-screen"
      style={{ opacity }}
      ref={targetRef}
      animate={{ x: [100, -100, 0], opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.2, 0.2, 0.76, 1],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
    >
      <div className="flex flex-col space-y-1.5 text-white order-last md:order-first mt-10 md:mt-0">
        <h2 className="text-base lg:text-xl font-semibold">
          Oh Hey! My name is
        </h2>
        <h1 className="text-xl lg:text-5xl font-bold my-5 leading-6 uppercase text-yellow-primary ">
          Chaimaa Safi
        </h1>
        <p className="text-base lg:text-lg font-medium">
          A Front-end Developer
        </p>
        <Link href="/#about" className="md:w-[200px] mt-4">
          <Button type="primary">Know more</Button>
        </Link>
      </div>
      <div className=" relative h-[400px] md:hidden w-full rounded-lg">
        <Image
          src={me}
          alt="me"
          fill
          className="rounded-lg object-cover"
          placeholder="blur"
        />
      </div>
      <div className="relative hidden md:block ">
        <motion.div
          whileHover={{
            scale: 0.8,
            zIndex: 50,
            rotate: [0, 360],
            transition: { duration: 0.7, loop: Infinity },
          }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className="absolute lg:w-[350px] lg:h-[500px] w-[250px] h-[360px] bg-yellow-400 rounded-lg flex items-center justify-center"
        >
          <motion.div>
            <p className="text-2xl font-light italic">Enjoy your visit ❤️</p>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ x: "-20vh", y: 20 }}
          transition={{
            duration: 1.4,
            type: "spring",
            mass: 0.5,
            damping: 8,
            delay: 1,
          }}
          className="lg:w-[330px] lg:h-[450px] w-[230px] h-[300px] bg-red-400 rounded-lg shadow-lg shadow-gray-100"
        >
          <Image
            src={me}
            alt="me"
            fill
            className="rounded-lg object-cover"
            placeholder="blur"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
