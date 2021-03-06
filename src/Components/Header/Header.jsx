/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "./../../Context/ShoppingCartContext";

import { IconButton, Toolbar, AppBar, Tooltip } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import headerStyles from "./header.module.css";

const Header = () => {
  const { countItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="My Github Repository" arrow>
            <IconButton edge="start" color="inherit">
              <a
                style={{ color: "#ffffff" }}
                href="https://github.com/muhammadBilalMemon"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </IconButton>
          </Tooltip>
          <ul className={headerStyles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Shop</Link>
            </li>
            {/* <li>
              <Link to="sample">Contact</Link>
            </li> */}
            <li>
              <Link to="cart">View Cart ({countItems})</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
