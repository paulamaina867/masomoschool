import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../../../Context/AuthContext'
import axios from 'axios'

const ClassAdd = () => {

  const {token} = useContext(AuthContext)

 // Below is the auth header that primariry contains our token
  const authHeader = {
    headers : {Authorization : `Bearer ${token}`}
  }

  // Declare the hooks to enable you store values
  const[name, setName] = useState("");
  const[gradeLevel, setGradeLevel] = useState("");
  const[classYear, setClassYear] = useState(""); 

  // declare a function to handle what happens when a person clicks on the save button
  const handleSubmit = async (e) =>{
    //prevent the site from reloading
    e.preventDefault()

    // take the data and create an object of the data from the hooks
    const data = {name, gradeLevel, classYear}

    try{
      toast.info("Please wait as we add the new class...")
      const res = await axios.post("https://kindergartenapi.onrender.com/api/classrooms", data, authHeader)

      toast.dismiss()
      toast.success(res.data.message || "Class added successfully");

      // clear the hooks ready to receive new data of a class
      setClassYear("");
      setGradeLevel("")
      setName("");

    }
    catch(err){
      toast.dismiss();
      toast.error(err.response.data.message || "Error adding a new class.")
    }
  }

  return (
    <div className='container mt-2'>
    
          <ToastContainer position='top-right' autoClose={3000}/>
    
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to={"/admin-dashboard"}>Dashboard</Link> </li>
              <li class="breadcrumb-item" aria-current="page"><Link to={"/admin-dashboard/classes"}>Classes</Link></li>

              <li class="breadcrumb-item active" aria-current="page">Add Class</li>
            </ol>
          </nav>

          <div className="card p-4 shadow-sm mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-4 text-success">
                <i class="bi bi-building-fill-check"></i> Add new Class
              </h5>
               <Link className="btn btn-success" to={"/admin-dashboard/classes"}>
               <i className="bi bi-arrow-left-circle-fill me-2"></i>
                Back</Link>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text"
                  placeholder='Enter the Class Name here' 
                  className='form-control'
                  required
                  value={name}
                  onChange={(e)=>setName(e.target.value)}/>
                  {/* {name} */}
                  
                </div>

                <div className="col-md-6 mb-3">
                  <input type="text"
                  placeholder='Enter the Grade Level here i.e 1,2,3...' 
                  className='form-control'
                  required
                  value={gradeLevel}
                  onChange={(e)=>setGradeLevel(e.target.value)}/>
                  {/* {gradeLevel} */}
                  
                </div>

                <div className="col-md-6 mb-3">
                  <input type="number"
                  placeholder='Enter the Class Year here.' 
                  className='form-control'
                  required
                  value={classYear}
                  onChange={(e)=>setClassYear(e.target.value)}/>

                  {/* {classYear} */}
                  
                </div>

                
              </div>
              <button className="btn btn-outline-success" type='submit'>
                  Save Class
              </button>
            </form>
          </div>

          
    </div>
  )
}

export default ClassAdd