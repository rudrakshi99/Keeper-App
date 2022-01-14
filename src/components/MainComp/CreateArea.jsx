import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Fab from "@material-ui/core/Fab";
import { Zoom, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  myStyle: {
    float: "right",
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    backgroundColor: "#f5ba13",
    border: "none",
    color: "white",
    marginTop: "-24px",
  },
  formArea: {
    [theme.breakpoints.down(600)]: {
      width: "350px",
    },
    [theme.breakpoints.down(400)]: {
      marginTop: "100px",
      width: "280px",
    },
  },
}));
export const CreateArea = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const classes = useStyles();

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    props.onAdd(note);
  }

  function expand() {
    setIsOpen(true);
  }

  return (
    <div>
      <form className={classes.formArea}>
        {isOpen && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
        <textarea
          name="text"
          onClick={expand}
          value={note.text}
          onChange={handleChange}
          placeholder="Take a note ..."
          rows={isOpen ? 3 : 1}
        />
        <Zoom in={isOpen}>
          <Fab className={classes.myStyle} onClick={submitNote}>
            {" "}
            <FaPlus />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};
