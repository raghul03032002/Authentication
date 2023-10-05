import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [userData, setUserData] = useState({
    id: '',
    email: '',
    phone:'',
    Qualif:'',
    skill:'',
    exp:'',
    age: '',
    add:'',
    gender:'',
    pwd:''
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3031/users",{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(userData)
    }).then((res)=>{
      alert("Registered Successfully.")
      navigate('/Login');
    }).catch((err)=>{
      alert("Registered failed:"+err.message)
    });
  };

  return (
    <div className='m-5 p-2'>
      <h1 className='mx-5 text-dark mt-5'><u>Register</u></h1>
      <form onSubmit={handleSubmit}>
          <div >
      <div className='row'>
    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="name" className="form-label text-dark">Name:</label>
  <input type="text" className="form-control border border-dark rounded-pill" id="name" placeholder="Enter Name" name="id"  value={userData.id} onChange={handleChange} required/>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="email" className="form-label text-dark">Email:</label>
  <input type="email" className="form-control border border-dark rounded-pill" id="email" placeholder="Enter email" name="email"  value={userData.email} onChange={handleChange} required/>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="phone" className="form-label text-dark">Phone No:</label>
  <input type="number" className="form-control border border-dark rounded-pill" id="phone" placeholder="Enter Phone No" name="phone"  value={userData.phone} onChange={handleChange} required/>
</div>
</div>
<div className='row'>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="Qualif" className="form-label text-dark">Qualification :</label>
  <input type="text" className="form-control border border-dark rounded-pill" id="Qualif" placeholder="Enter Qualification " name="Qualif"  value={userData.Qualif} onChange={handleChange} required/>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="skill" className="form-label text-dark">Skills :</label>
  <input type="text" className="form-control border border-dark rounded-pill" id="skill" placeholder="Enter Skills" name="skill"  value={userData.skill} onChange={handleChange} required/>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="exp" className="form-label text-dark">Experience :</label>
  <input type="text" className="form-control border border-dark rounded-pill" id="exp" placeholder="Enter Work Experience" name="exp"  value={userData.exp} onChange={handleChange} required/>
</div>
</div>
<div className='row'>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="age" className="form-label text-dark">Age:</label><br/>
    <input type="number" className='form-control border border-dark rounded-pill' id='age' placeholder='Enter your Age ' name='age' value={userData.age} onChange={handleChange} required />
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="add" className="form-label text-dark">Address:</label>
  <textarea className="form-control border border-dark rounded-pill" id="add" rows="3" placeholder='Enter the Address' name='add'  value={userData.add} onChange={handleChange} required/>
</div>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="pass" className="form-label text-dark">Password:</label>
  <input type="password" className="form-control border border-dark rounded-pill" id="pass" placeholder="Enter password" name="pass" required />
</div>
</div>
<div className='row'>
<div className="col-sm-12 col-md-4 col-lg-4 col-12 mt-3">
  <label htmlFor="pwd" className="form-label text-dark">Confirm Password:</label>
  <input type="password" className="form-control border border-dark rounded-pill" id="cpwd" placeholder="Enter Confirm password" name="pwd" value={userData.pwd} onChange={handleChange} required/>
</div>
</div>
<button type="submit" className="btn btn-dark   mt-3 px-3">Register</button>
<p className='mx-4 mt-1'>Have an account?<Link to={"/Login"}>Sign Up</Link></p>
</div>
      </form>
    </div>
  );
}

export default Register;