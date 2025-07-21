// Motion Variants (Framer Motion)
export const container = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: {
               staggerChildren: 0.1,
               when: "beforeChildren",
          },
     },
};

export const item = {
     hidden: { opacity: 0, y: 20 },
     show: { opacity: 1, y: 0 },
};

export const fadeIn = {
     hidden: { opacity: 0 },
     show: { opacity: 1 },
};

export const fadeDelayed = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: { delay: 0.5 },
     },
};

export const slideUp = {
     hidden: { opacity: 0, y: 50 },
     show: { opacity: 1, y: 0 },
};

export const slideDown = {
     hidden: { opacity: 0, y: -50 },
     show: { opacity: 1, y: 0 },
};

export const slideLeft = {
     hidden: { opacity: 0, x: -50 },
     show: { opacity: 1, x: 0 },
};

export const slideRight = {
     hidden: { opacity: 0, x: 50 },
     show: { opacity: 1, x: 0 },
};

export const zoomIn = {
     hidden: { opacity: 0, scale: 0.8 },
     show: { opacity: 1, scale: 1 },
};

export const flipY = {
     hidden: { opacity: 0, rotateY: 90 },
     show: { opacity: 1, rotateY: 0 },
};

export const rotateIn = {
     hidden: { opacity: 0, rotate: -90 },
     show: { opacity: 1, rotate: 0 },
};

export const bounceIn = {
     hidden: { opacity: 0, y: 100 },
     show: {
          opacity: 1,
          y: 0,
          transition: {
               type: "spring",
               stiffness: 500,
               damping: 30,
          },
     },
};
