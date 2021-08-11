import React, { useState } from "react";

// Animation
import { AnimatePresence, motion } from "framer-motion";

// Routing
import { Link } from "react-router-dom";

// Style
import { Container, Flex } from "../utils/style/styles";
import {
  Nav,
  NavHeader,
  NavList,
  CloseNav,
  NavFooter,
  NavVideos,
} from "../utils/style/navStyle";

// Videos
import aboutVideo from "../assets/video/about-us.mp4";
import workVideo from "../assets/video/our-work.mp4";
import contactVideo from "../assets/video/contact-us.mp4";

const navRoutes = [
  {
    id: 0,
    title: "about us",
    path: "/",
    video: aboutVideo,
  },
  {
    id: 1,
    title: "our work",
    path: "/work",
    video: workVideo,
  },
  {
    id: 2,
    title: "contact us",
    path: "/contact",
    video: contactVideo,
  },
];

const Navigation = ({ toggleMenu, setToggleMenu }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: aboutVideo,
    key: "0",
  });

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? "0" : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Picturesque</h2>
                  <CloseNav onClick={() => setToggleMenu(!toggleMenu)}>
                    <button>
                      <i class="fas fa-times"></i>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                    >
                      <Link to={route.path}>
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter></NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                >
                  <div className="video">
                    <AnimatePresence initial={false} exitBeforeEnter>
                      <motion.video
                        key={revealVideo.key}
                        src={revealVideo.video}
                        type="video/mp4"
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        autoPlay
                        loop
                        muted
                      ></motion.video>
                    </AnimatePresence>
                  </div>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
