import React , { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(prop) {
  const {open, setOpen , updateNote} = prop ;

  const handleClose = () => {
    setOpen(false);
  };
  
  const [note, setNote] = useState({
        title: '',
        text: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(preNote => {
            return {
                ...preNote,
                [name]: value
            };
        });
    }

 
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            name="title"
            value = {note.title} 
            onChange={handleChange}
            label="Title"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="text"
            value = {note.text}
            onChange={handleChange}
            label="Content"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOpen(false)}} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> updateNote(note)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
