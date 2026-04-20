'use client';

import { motion } from "framer-motion";

export default function DriftingText() {
  return (
    <div className="absolute top-1/4 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none z-0">
      <motion.div
        animate={{ x: [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="text-[6rem] font-black uppercase whitespace-nowrap text-black"
      >
        ORIGINALS // UNFILTERED // AUTHENTIC // BEYOND //
      </motion.div>
    </div>
  );
}