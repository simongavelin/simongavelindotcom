import { motion } from "framer-motion";

const sentenceVariant = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.07,
    },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const firstLine = "Senior Frontend Developer with a passion for";
const secondLine = "React, Typescript and Next.js.";

/**
 * Animate sub heading texts using `framer-motion`
 */
const AnimatedLetters = () => {
  return (
    <>
      <motion.h3 className="py-8 text-sm lg:text-lg text-center" variants={sentenceVariant} initial="hidden" animate="visible">
        {firstLine.split("").map((char, index) => {
          return (
            <motion.span key={`fl-${char}-${index}`} variants={letterVariant}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {secondLine.split("").map((char, index) => {
          return (
            <motion.span key={`sl-${char}-${index}`} variants={letterVariant}>
              {char}
            </motion.span>
          );
        })}
      </motion.h3>
    </>
  );
};

export default AnimatedLetters;
