import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

function Hamburger() {
  return (
    <div>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Sign in
        </a>
        <a id="home" className="menu-item" href="/orders">
          Orders
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
}

export default Hamburger;
