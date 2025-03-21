'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: string;
  threshold?: number;
  delay?: number;
  className?: string;
}

const animationVariants: Record<string, Variants> = {
  default: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      }
    }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
      }
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
      }
    }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  },
  bounce: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 1
      }
    }
  }
};

export default function AnimateOnScroll({
  children,
  animation = 'fadeInUp',
  threshold = 0.1,
  delay = 0.2,
  className = '',
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });
  const [isClient, setIsClient] = useState(false);

  const chosenVariants = animationVariants[animation] || animationVariants.default;

  useEffect(() => {
    setIsClient(true);
    
    const timer = setTimeout(() => {
      if (inView) {
        controls.start('visible');
      }
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [controls, inView, delay]);

  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={chosenVariants}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
} 