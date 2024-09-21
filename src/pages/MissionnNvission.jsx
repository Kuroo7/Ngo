import { motion } from "framer-motion";

const MissionnNvission = () => {
  // Animation variants for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <div className="min-h-screen py-12 px-4 md:px-20 lg:px-32 bg-gray-50">
      {/* Mission Section */}
      <motion.div
        className="mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8">
          Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Connectors is more than just a platform; we're a catalyst for positive
          change. Our mission is to bridge the gap between NGOs and the broader
          community, fostering meaningful connections that empower NGOs to
          achieve their goals. We believe that every individual has the
          potential to make a difference, and our platform is designed to
          facilitate those connections.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          By connecting NGOs with individuals and organizations that can provide
          essential resources, support, and collaboration, we aim to create a
          more equitable and just world. We're committed to empowering NGOs to
          address pressing social issues and make a lasting impact on their
          communities.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8">
          Vision
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Our vision is to create a world where NGOs are well-resourced,
          supported, and empowered to make a significant difference. We strive
          to be a leader in fostering a culture of compassion, generosity, and
          active participation in social causes.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
          We envision a future where every individual feels connected to the
          work of NGOs and is inspired to contribute to their success. Through
          our platform, we will connect people who are passionate about making a
          difference with NGOs that are actively working to address pressing
          social issues. By facilitating these connections, we hope to inspire a
          new generation of philanthropists and create a more equitable and just
          world for all.
        </p>
      </motion.div>
    </div>
  );
};

export default MissionnNvission;
