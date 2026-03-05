"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fallbackShow, setFallbackShow] = useState(false);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.05,
    margin: "0px 0px -50px 0px"
  });

  useEffect(() => {
    const t = setTimeout(() => setFallbackShow(true), 400);
    return () => clearTimeout(t);
  }, []);

  const shouldShow = isInView || fallbackShow;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={
        shouldShow
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut", delay }
            }
          : { opacity: 0, y: 20 }
      }
    >
      {children}
    </motion.div>
  );
}

