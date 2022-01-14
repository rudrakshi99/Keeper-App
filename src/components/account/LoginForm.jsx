import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Loading } from "../MainComp/Loading";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: "40vh",
    width: 480,
    margin: "20px auto",
    [theme.breakpoints.down(600)]: {
      width: "330px",
    },
    [theme.breakpoints.down(330)]: {
      width: "280px",
    },
  },
  avatarStyle: {
    backgroundColor: "#f5ba13",
  },
  btnstyle: {
    margin: "8px 0",
    backgroundColor: "#f5ba13",
    color: "white",
  },
}));
export const LoginForm = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    localStorage.getItem("refresh") && history.push("/main");
  }, []);

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((preDetail) => {
      return {
        ...preDetail,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(false);
    const login_details = {
      email: details.email,
      password: details.password,
    };

    axios
      .post(
        `https://rudrakshi-keeper-app.herokuapp.com/api/accounts/login/`,
        login_details
      )
      .then((response) => {
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("refresh", response.data.tokens.refresh);
        localStorage.setItem("access", response.data.tokens.access);
        history.push("/main");
      })
      .catch((err) => {
        setIsLoading(true);
        setError("Please check your details!");
      });
  };

  return (
    <div>
      {!isLoading ? (
        <Loading />
      ) : (
        <Grid>
          <Paper elevation={10} className={classes.paperStyle}>
            <Grid align="center">
              <Avatar className={classes.avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            {error !== "" && <div style={{ color: "red" }}>{error}</div>}
            <TextField
              style={{ margin: "6px 0" }}
              label="Email"
              name="email"
              value={details.email}
              placeholder="Enter email"
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              style={{ margin: "10px 0" }}
              label="Password"
              name="password"
              value={details.password}
              placeholder="Enter password"
              onChange={handleChange}
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              onClick={submitHandler}
              variant="contained"
              className={classes.btnstyle}
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Do you have an account ?<Link to="/register">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      )}
    </div>
  );
};
