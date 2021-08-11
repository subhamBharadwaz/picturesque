import React from "react";

// Page components
import AboutSection from "../components/AboutSection";

// Import Animation
import { motion } from "framer-motion";
import ServicesSection from "../components/ServicesSection";

const About = () => {
  return (
    <motion.div>
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
};

export default About;
