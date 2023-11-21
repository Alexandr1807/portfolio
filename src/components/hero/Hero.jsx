import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y: 1000,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Alexander Cyganov</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a href="#Portfolio" variants={textVariants}>
              See the latest works
            </motion.a>
            <motion.a href="#Contact" variants={textVariants}>
              Contact me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Frontend Backend FullStack Developer
        </motion.div>
        {/* <div className="imageContainer">
          <img src="hero.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
