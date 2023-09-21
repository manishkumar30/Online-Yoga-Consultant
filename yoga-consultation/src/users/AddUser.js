import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {

  let navigate=useNavigate()

const [user, setUser]=useState({
  name:"",
  age:"",
  email:""
})

const{name,age,email}=user

const onInputChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
};

const onSubmit=async (e)=>{
e.preventDefault();
await axios.post("http://localhost:8080/user",user)
navigate("/")
}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border border-success rounded p-4 mt-2 shadow">
         <h2 className="text-center m-4">Add Yoga Consultant Record</h2>
         <form onSubmit={(e)=>onSubmit(e)}>
         <div className="mb-3">
          <label htmlFor="Name" className='form-label'>
           Name
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="Age" className='form-label'>
           Age
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your age"
          name="age"
          value={age}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <div className="mb-3">
          <label htmlFor="Email" className='form-label'>
           Email
          </label>
          <input
          type={"text"}
          className="form-control"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e)=>onInputChange(e)}
          />
         </div>
         <button type="submit" className="btn btn-outline-success">Submit</button>
         <Link  className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
         </form>
        </div>
      </div>
       
    </div>
  );
}
