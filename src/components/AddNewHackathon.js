import React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
export default function AddNewHackathon(props) {
  const { onClose, openForm } = props;

  const handleClose = () => {
    onClose(false);
  };

  const submitHackathon = () => {
    localStorage.setItem('title', document.getElementById('title').value);
    localStorage.setItem('desc', document.getElementById('desc').value);
    onClose(false);
  }

  return (
    <Dialog onClose={handleClose} open={openForm} >
      <DialogTitle>Add New hackathon</DialogTitle>
        <section className="new-hackathon-form">
        <label className="new-hackathon-form_label">Add title 
            <input type="input" id="title"></input>
          </label>
        <label className="new-hackathon-form_label">Add description
            <input type="input" id="desc"></input>
          </label>
          <Button onClick={submitHackathon}>Submit</Button>
        </section>
    </Dialog>
  );

}
