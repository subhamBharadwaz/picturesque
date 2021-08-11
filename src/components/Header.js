import React from "react";

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      X
    </div>
  );
};

export default Header;
