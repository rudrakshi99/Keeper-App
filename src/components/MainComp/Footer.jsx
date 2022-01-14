import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    textAlign: "center",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "3.5rem",
  },
}));
export const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>
        Made with <span style={{ color: "#ffa500" }}>&hearts;</span> by{" "}
        <a href="https://github.com/rudrakshi99">@rudrakshi</a>
      </p>

      <p>Copyright © {currentYear}. All rights reserved.</p>
    </footer>
  );
};
