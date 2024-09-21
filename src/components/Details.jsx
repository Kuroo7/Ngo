import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Details = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.1,    // Element must be at least 10% in view
  });

  // Counter state
  const [volunteers, setVolunteers] = useState(0);
  const [peopleHelped, setPeopleHelped] = useState(0);
  const [fundsCollected, setFundsCollected] = useState(0);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  // Counter effect
  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Count up logic
      const countUp = (setter, target) => {
        let count = 0;
        const interval = setInterval(() => {
          if (count < target) {
            count += Math.ceil(target / 100); // Increment by a fraction of the target
            setter(Math.min(count, target)); // Ensure we don't exceed the target
          } else {
            clearInterval(interval); // Stop when target is reached
          }
        }, 50); // Adjust speed here
      };

      countUp(setVolunteers, 6478);
      countUp(setPeopleHelped, 348195);
      countUp(setFundsCollected, 16000000); // 16M
    }
  }, [controls, inView]);

  return (
    <div className="h-auto md:h-[100vh] flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center px-4 md:px-8 py-10">
      {/* Statistics Section */}
      <motion.div
        className="flex flex-col gap-8 md:gap-12"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-7xl font-bold">{volunteers}</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">Volunteers in 2020</h3>
        </div>
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-8xl font-bold">{peopleHelped}</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">People we helped in 2020</h3>
        </div>
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-8xl font-bold">{(fundsCollected / 1000000).toFixed(0)}M</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">Funds we collected</h3>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full md:w-2/4 text-center md:text-left"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl uppercase">We help all people</h2>
        <h1 className="text-4xl md:text-6xl mt-5 uppercase font-bold text-blue-800">Around the world</h1>
        <p className="text-lg md:text-xl mt-5 w-full md:w-3/4 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur, necessitatibus distinctio fuga ducimus tempore corporis autem totam saepe excepturi!
        </p>
        <Link to='/about'>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(0,0,0,0.5)" }}
            className="h-12 px-5 mt-10 rounded-md text-black outline outline-2"
          >
            About Us
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Details;
