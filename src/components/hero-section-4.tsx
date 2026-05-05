import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility
import { ArrowDown } from "lucide-react";
import { motion, type Variants } from "motion/react";
import * as React from "react";

// Props interface for type safety
interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  imageUrl: string;
}

// Animation variants for the container to orchestrate staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation variants for child elements (text and buttons)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      subtitle,
      imageUrl,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative flex h-screen min-h-175 w-full items-center justify-center overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
          aria-hidden="true"
        />

        {/* Optional: Add a subtle overlay for better text readability */}
        <div className="absolute inset-0 z-0 bg-black/50" aria-hidden="true" />

        {/* Content Container */}
        <motion.div
          className="z-10 flex max-w-4xl flex-col items-center justify-center text-center text-primary-foreground"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Title */}
          <motion.h1
            className="text-5xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="mt-6 w-full text-md leading-8 md:text-lg"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* Animated down arrow */}
          <motion.div className="mt-10 flex items-center" variants={itemVariants}>
            <ArrowDown className="animate-bounce bg-primary p-2 w-10 h-10 rounded-full"/>
          </motion.div>
        </motion.div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
