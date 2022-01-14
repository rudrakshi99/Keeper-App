import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Typography, Container, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#eee",
    color: "rgba(144, 144, 143, 0.692)",
    bottom: "0",
    top: "auto",
  },
}));
export const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <AppBar position="fixed" className={classes.footer}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ margin: "0 auto" }}
          >
            Made with <span style={{ color: "#ffa500" }}>&hearts;</span> by{" "}
            <a href="https://github.com/rudrakshi99">@rudrakshi</a>
            <br />
            Copyright © {currentYear}. All rights reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
