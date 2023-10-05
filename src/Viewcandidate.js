import React,{useState,useEffect} from 'react'

function Viewcandidate() {
    const[candidate,setcandidate]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3031/users')
        .then(det=>det.json())
        .then(det=>setcandidate(det))

    },[])
  return (
    <div>
        <h2 className='card-det m-5 px-5'>
       <u className='m-5'>Our Candidates</u>
        </h2>
       <div class="container">
        <div class="row">
            {candidate.map((can)=>(
                <div className='col-sm-12 col-md-4 col-lg-4 col-12 coldata my-3'>
                <div className='data border rounded px-4 bg-dark text-light'>
                <u><p class='mt-3 text-capitalize'>Detail of {can.id} </p></u>                  
                <p>E-Mail :{can.email}</p> 
                <p>Qualification : {can.Qualif}</p>                 
                <p>Phone :{can.phone}</p>                 
                <p>Skills :{can.skill}</p>                 
                <p>Experience :{can.exp}</p>                 
                <p>Address : {can.add}</p>                 
                </div>
                </div>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Viewcandidate