import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import bg from "../assets/bg.png";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <div
      className="h-[100vh] flex flex-col items-start justify-center pl-8 md:pl-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-black mb-6 text-2xl md:text-3xl uppercase"
      >
        We help all people
      </motion.h2>
      <motion.h1
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-blue-800 mb-5 text-5xl md:text-7xl uppercase font-bold"
      >
        Around the world
      </motion.h1>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="text-black font-thin text-xl md:text-2xl"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, id!
      </motion.p>
      <div className="flex gap-4 mt-16 md:mt-32 font-bold">
        <motion.button
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="h-12 px-5 rounded-md text-black outline outline-2 transition transform hover:scale-105 hover:shadow-lg"
        >
          Contact Us
        </motion.button>
        <motion.button
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="bg-blue-700 h-12 px-5 rounded-md text-white transition transform hover:scale-105 hover:shadow-lg"
        >
          Donate Now
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
