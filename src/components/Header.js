import React from "react";

// Styles
import styled from "styled-components";
import { Flex } from "../utils/style/styles";

// Routing
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <Container>
      <Flex spaceBetween>
        <div id="logo">
          <Link to="/">
            <h2>Picturesque</h2>
          </Link>
        </div>
        <Burger onClick={() => setToggleMenu(!toggleMenu)}>
          <span></span>
          <span></span>
        </Burger>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  min-height: 10vh;
  background: #070b0f;
  padding: 2rem 2rem;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 10;
  #logo {
    h2 {
      font-size: 1.5rem;
      font-family: "Lobster", cursive;
      color: #23d997;
    }
  }
`;

const Burger = styled.button`
  transform-origin: center;
  border: none;
  padding: 20px;
  background: none;
  outline: none;
  cursor: pointer;
  position: relative;
  span {
    width: 36px;
    height: 8px;
    display: block;
    background: #fff;
    margin: 8px;
  }
`;

export default Header;
