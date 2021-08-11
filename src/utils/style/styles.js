// Animation
import { motion } from "framer-motion";

// Import styles
import styled from "styled-components";

export const About = styled(motion.div)`
  min-height: 100vh;
  display: block;
  padding: 2rem 2rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding: 0;
  z-index: 2;
  button {
    margin: 2rem 0 5rem 0;
  }
  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
