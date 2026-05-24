"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src="/images/LOGO.webp"
          alt="Niha's Logo"
          width={140}
          height={140}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
}