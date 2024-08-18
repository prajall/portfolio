export const variants = {
  heroOther: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 2.3,
      },
    },
  },
  heroOtherDelay: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 2.4,
      },
    },
  },
  heroImage: {
    initial: {
      y: 70,
      opacity: 0,
      scale: 1.1,
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1.0],
        delay: 1.8,
      },
    },
  },
  heroImageShadow: {
    initial: {
      y: 150,
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1.0],
        delay: 1.8,
      },
    },
  },
  mainName: {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.4, 0.0, 0.2, 1.0],
        delay: 2.3,
      },
    },
  },
  underText: {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.4, 0.0, 0.2, 1.0],
        delay: 2.4,
      },
    },
  },
};
