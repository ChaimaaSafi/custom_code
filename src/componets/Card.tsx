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
      className="w-full"
    >
      <motion.button
        className="px-4 py-2.5 w-full bg-white rounded-xl flex items-center justify-between"
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen(!open)}
      >
        <div className="text-start">
          <h2 className="text-xl font-medium text-[#ED4264]">{title}</h2>
          <p className="text-base font-normal">{description}</p>
        </div>
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <ChevronDoubleIcon />
        </div>
      </motion.button>
      <Modal showModal={open} setShowModal={() => setOpen(false)}>
        <CodeSnippet slug={slug} />
      </Modal>
    </motion.div>
  );
}

export default Card;
