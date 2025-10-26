import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import EmailIcon from "./icons/EmailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

/**
 * Contact info blocks
 */
const ContactInfo = () => {
  return (
    <div className="py-6">
      <motion.div
        className="hover:text-orange-400 transition-colors duration-500"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 22 * 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
        }}
      >
        <Link href={"https://www.linkedin.com/in/simon-gavelin/"} target={"_blank"} className="contact-link">
          <div className="flex justify-center">
            <LinkedInIcon />
            <span className="ml-1">LinkedIn</span>
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="mt-2 hover:text-orange-400 transition-colors duration-500"
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, delay: 23 * 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.1,
        }}
      >
        <Link href={"mailto:info@simongavelin.com"} target={"_blank"} className="contact-link">
          <div className="flex justify-center">
            <EmailIcon />
            <span className="ml-1">info@simongavelin.com</span>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
