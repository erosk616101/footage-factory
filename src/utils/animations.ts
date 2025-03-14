
import { Variants } from 'framer-motion';

// Reusable animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const slideUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    y: -20, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const slideDown: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    y: 20, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const slideInRight: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    x: 50, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const slideInLeft: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    x: -50, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const zoomIn: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    scale: 0.95, 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Page transitions
export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.4, 
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: 'easeInOut',
      when: 'afterChildren',
    }
  }
};

// Hover animations for cards
export const cardHover = {
  rest: { 
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: { 
    scale: 1.02,
    y: -5,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Button animations
export const buttonTap = {
  tap: { scale: 0.97 }
};

// Loader animation
export const loaderVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear'
    }
  }
};

// Image reveal animation
export const imageReveal: Variants = {
  hidden: { 
    filter: 'blur(10px)', 
    opacity: 0 
  },
  visible: { 
    filter: 'blur(0px)', 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

// Custom spring settings
export const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

// Sequenced animation helper
export const createSequenceAnimation = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5
    }
  }
});
