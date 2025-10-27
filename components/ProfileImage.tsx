import { motion } from "framer-motion";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100, transition: { duration: 1.5, ease: "easeInOut", delay: 0.2 } }}>
      <Image src="/simon-gavelin.jpg" className="rounded-full" alt="Simon Gavelin portrait" width={200} height={202} priority />
    </motion.div>
  );
};

export default ProfileImage;
