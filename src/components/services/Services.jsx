import { useRef } from "react";
import "./services.scss";
import { motion, useInView, stagger } from "framer-motion";

const tools = [
  {
    name: "HTML",
    icon: "html.png"
  },
  {
    name: "CSS",
    icon: "css.png"
  },
  {
    name: "JS",
    icon: "js.png"
  },
  {
    name: "PHP",
    icon: "php.png"
  },
  {
    name: "React",
    icon: "react.png"
  },
  {
    name: "Node",
    icon: "node.png"
  },
  {
    name: "TS",
    icon: "typescript.png"
  },
  {
    name: "Next",
    icon: "next.png"
  },
  {
    name: "Express",
    icon: "express.png"
  },
  {
    name: "Sass",
    icon: "sass.png"
  },
  {
    name: "Less",
    icon: "less.png"
  },
  {
    name: "Figma",
    icon: "figma.png"
  },
  {
    name: "Yii2",
    icon: "yii2.png"
  },
  {
    name: "WP",
    icon: "wordpress.png"
  },
  {
    name: "Git",
    icon: "git.png"
  },
]

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skillsVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};



const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <div className="about">
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <h1>
              <motion.b>About me</motion.b>
            </h1>
          </div>
        </motion.div>
        <div className="about__text-wrapper">
          <p className="about__text">
            I&rsquo;m a Web Developer building the Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Portfolio section.
          </p>
        </div>
        <div className="about__box-wrapper">
          <h2>Tooling</h2>
          <div className="about__box">
            {tools.map((item) => (
              <motion.div className="about__box-item" ref={ref} key={item.name} variants={skillsVariants} whileHover={{ scale: 1.1 }}>
                <img src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </motion.div>
            ))}
            {/* <div className="about__box-item">HTML</div>
            <div className="about__box-item">CSS</div>
            <div className="about__box-item">JS</div>
            <div className="about__box-item">PHP</div>
            <div className="about__box-item">React</div>
            <div className="about__box-item">Git</div>
            <div className="about__box-item">Yii2</div>
            <div className="about__box-item">NodeJS</div>
            <div className="about__box-item">NextJS</div>
            <div className="about__box-item">Typescript</div>
            <div className="about__box-item">ExpressJS</div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
