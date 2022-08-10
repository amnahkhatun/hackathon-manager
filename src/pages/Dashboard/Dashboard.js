import React, { useState, useEffect } from 'react';
import AddNewHackathon from '../../components/AddNewHackathon';
import './dashboard.css';
import { Link } from 'react-router-dom'
import DataTable from '../../components/DataTable';
import { Button } from '@mui/material';


export default function Dashboard() {
 const [openForm, setOpenForm] = useState(false)
 const [titles, setTitles] = useState('')
  const [descs, setDesc] = useState('')

  const handleClose = (value) => {
    setOpenForm(false);
  };

  useEffect(() => {
    setTitles(localStorage.getItem('title'));
    setDesc(localStorage.getItem('desc'));
  }, [titles,descs])

  return (
    <main className="dashboard-main">
      <section>
       <DataTable/>
      </section>
      <section>
        <div className="dashboard-btn">
          <Button variant="contained" >
            <Link to="/login">
              Logout
            </Link>
          </Button>
        </div>
        <div className="dashboard-btn">
          <Button variant="contained" onClick={() => setOpenForm(true)}>Add new</Button>
       </div>
      </section>
      {openForm && 
      <AddNewHackathon
        openForm={openForm}
        onClose={handleClose}
      />}
    </main>
  )
}
