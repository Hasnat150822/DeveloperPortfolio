import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  threshold?: number; // Visibility threshold (0-1)
  delay?: number; // Animation delay in seconds
  duration?: number; // Animation duration in seconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'; // Direction to animate from
  distance?: number; // Distance to animate in pixels
  once?: boolean; // Whether to only animate once
  className?: string;
}

export const ScrollReveal = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 50,
  once = true,
  className = '',
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Set initial animation state based on direction
  const getInitialAnimation = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  // Set target animation state
  const getTargetAnimation = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'none':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitialAnimation()}
        animate={isVisible ? getTargetAnimation() : getInitialAnimation()}
        transition={{
          duration,
          delay,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal;