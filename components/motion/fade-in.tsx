"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Dirección del leve desplazamiento inicial. */
  direction?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li";
};

const OFFSET = 18;

function getVariants(direction: FadeInProps["direction"]): Variants {
  const offset =
    direction === "up"
      ? { y: OFFSET }
      : direction === "down"
        ? { y: -OFFSET }
        : direction === "left"
          ? { x: OFFSET }
          : direction === "right"
            ? { x: -OFFSET }
            : {};

  return {
    hidden: { opacity: 0, ...offset },
    visible: { opacity: 1, x: 0, y: 0 },
  };
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
}: FadeInProps) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
