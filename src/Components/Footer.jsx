import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2020 Muhammad Bilal
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
