"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link';

const title1 = "Fullstack Developer with a passion for";
const title2 = "React, Typescript and Next.js.";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 text-center">
        <h1
          className="text-6xl lg:text-8xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-b
          from-orange-200
          via-red-400
          to-yellow-700"
        >
          Simon Gavelin
        </h1>

        <motion.h3 className="py-8 text-sm lg:text-lg" variants={sentence} initial="hidden" animate="visible">
          {title1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
          {title2.split("").map((char, index) => {
            return (
              <motion.span key={char + "-2-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h3>

        <div className="py-4">
          <motion.div
            className="hover:text-orange-400 transition-colors"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 22 * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link href={"https://www.linkedin.com/in/simon-gavelin/"} passHref legacyBehavior>
              <a target={"_blank"} className="contact-link">
                <div className="flex justify-center">
                  <Image src="/linkedin.svg" alt="LinkedIn profile" width="24" height="24" />
                  <span className="ml-1">LinkedIn</span>
                </div>
              </a>
            </Link>
          </motion.div>
          <motion.div
            className="mt-2 hover:text-orange-400 transition-colors"
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 23 * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.1,
            }}
          >
            <Link href={"mailto:info@simongavelin.com"} passHref legacyBehavior>
              <a target={"_blank"} className="contact-link">
                <div className="flex justify-center">
                  <Image src="/email.svg" alt="contact me by email" style={{ color: "white" }} width="24" height="24" />
                  <span className="ml-1">info@simongavelin.com</span>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
    </main>
  )
}
