import React from "react";
import { FaFeatherAlt } from "react-icons/fa";
import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  head: {
    fontSize: "2rem",
    fontFamily: "McLaren",
    color: "white",
    margin: "0 0 10px 0",
    [theme.breakpoints.down(600)]: {
      fontSize: "1.5rem",
    },
  },
  userInfo: {
    float: "right",
    display: "flex",
    padding: "33px",
    [theme.breakpoints.down(600)]: {
      padding: "10px",
      margin: "10px 0 0 0",
    },
  },
  userName: {
    fontFamily: "McLaren",
    marginRight: "15px",
  },
}));

export const Header = ({ logout }) => {
  const classes = useStyles();
  return (
    <header>
      <Typography variant="h3" className={classes.head}>
        <FaFeatherAlt />
        Keeper
      </Typography>
      {localStorage.getItem("username") && (
        <div className={classes.userInfo}>
          <Typography variant="h5" className={classes.userName}>
            Hello, {localStorage.getItem("username")}{" "}
          </Typography>
          <Link to="/">
            <Typography
              variant="h5"
              className={classes.userName}
              style={{ textDecoration: "none" }}
              onClick={() => {
                logout();
              }}
            >
              {" "}
              Logout{" "}
            </Typography>
          </Link>
        </div>
      )}
    </header>
  );
};
