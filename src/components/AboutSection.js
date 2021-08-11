import React from "react";

// Styles
import { About, Description, Image, Hide } from "../utils/style/styles";

// Images
import home1 from "../assets/img/home1.png";

// Animation
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>

        <motion.p>
          Contact us for any photography or choreography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>

        <motion.button className="btn">Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="cameraman" />
      </Image>
    </About>
  );
};

export default AboutSection;
