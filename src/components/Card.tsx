"use client";
import ChevronDoubleIcon from "@/icons/ChevronDoubleIcon";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import CodeSnippet from "./CodeSnippet";

type CardProps = {
  title: string;
  description: string;
  index: number;
  slug: string;
};

const menu = {
  closed: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
function Card({ title, description, slug, index }: CardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: -50,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        translateX: 0,
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.2,
      }}
      className="w-full md:min-h-[100px] h-full bg-white rounded-xl"
    >
      <motion.button
        className="px-4 py-2.5 w-full"
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-lg text-start md:text-xl font-medium text-[#ED4264]">
            {title}
          </h2>
          <div
            className="arrow -rotate-90"
            style={{ transformOrigin: "50% 55%" }}
          >
            <ChevronDoubleIcon />
          </div>
        </div>
        <p className="text-sm font-normal text-start text-gray-800 w-full  md:max-w-[650px] leading-6">
          {description}
        </p>
      </motion.button>
      <Modal showModal={open} setShowModal={() => setOpen(false)}>
        <CodeSnippet slug={slug} closeModal={() => setOpen(false)} />
      </Modal>
    </motion.div>
  );
}

export default Card;