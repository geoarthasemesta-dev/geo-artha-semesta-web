import { motion, useInView } from "framer-motion";
import React from "react";

// Animation variants
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// Animated section wrapper
export const AnimatedSection = ({
  children,
  className = "",
  variants = fadeInUpVariants,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  [key: string]: any;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};
