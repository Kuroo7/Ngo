import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Donate = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,  // Animation happens only once when in view
    threshold: 0.2,     // Trigger when 20% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <>
      <motion.div
        ref={ref}  // Ref to track when the section is in view
        className="h-auto md:h-[82vh] bg-blue-800 text-white mx-4 md:mx-8 rounded-md overflow-hidden flex flex-col justify-center"
        initial="hidden"
        animate={controls}  // Controls the animation state based on scroll
        variants={containerVariants}
      >
        <motion.div
          className="px-4 md:px-24 ml-0 md:ml-24"
          variants={containerVariants}
        >
          <motion.h1
            className="bg-white rounded-md font-bold text-xl md:text-2xl text-black w-full md:w-96 py-2 px-3"
            variants={containerVariants}
          >
            Sponsor according to your limit
          </motion.h1>
          <motion.h1
            className="text-2xl md:text-4xl font-bold mt-8"
            variants={containerVariants}
          >
            Help Wayanad overcome the massive flood
          </motion.h1>
          <motion.p
            className="mt-4 md:mt-8 text-lg md:text-2xl"
            variants={containerVariants}
          >
            Support the people who lost their homes and loved ones.
          </motion.p>
          <motion.div className="mt-8" variants={containerVariants}>
            <motion.button
              className="bg-yellow-500 text-black text-xl rounded-md font-bold outline-none px-5 py-4 hover:bg-yellow-600 transition duration-300"
              whileHover={{ scale: 1.05 }} // Button hover effect
            >
              Donate Now
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <hr className="my-8 mx-4 md:mx-8" />
    </>
  );
};

export default Donate;
