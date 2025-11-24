import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

const Classes = () => {

  // Below we have classes hook that will store all the classes fetched from the API
  const[classes, setClasses] = useState([]);
  const {token} = useContext(AuthContext)

  const navigate = useNavigate();

  // Below is the auth header that primariry contains our token
  const authHeader = {
    headers : {Authorization : `Bearer ${token}`}
  }

  // console.log("The classes fetched from the API are: ", classes)


  // Below is the function that shall enable us to fetch the classes from the API
  const fetchClasses = async ()=>{
    try{
      toast.info('Loading Classes...')

      const res = await axios.get("https://kindergartenapi.onrender.com/api/classrooms", authHeader)

      // by use of the setClasses function update the classes hook with the data received from the API
      setClasses(res.data)

      // finally dismiss the toast
      toast.dismiss()
    }
    catch(err){
      toast.dismiss();
      toast.error(err.response?.data?.message || "Failed to load Classes")
    }
  }

  // We shall use the useEffect hook which invokes itself automatically whenever a person lands on that component. The useEffect hook, will invoke for the fetchclasses funtion declared on top.
  useEffect(()=>{
    fetchClasses()
  }, [])

  // below is the function to handle the delete action
  const handleDelete = async (id)=>{
    if(window.confirm("Do you really want to delete this class?")){
      try{
        toast.warning("Deleting Class. Please wait....")
        await axios.delete(`https://kindergartenapi.onrender.com/api/classrooms/${id}`, authHeader);

        // after deleting the class, use the fetchClasses() function to retrieve the new list of classes
        fetchClasses()
      }
      catch(err){
        toast.dismiss()
        toast.error(err.response.data.message)
      }
    }
  }

  // declare a function to handle what happens when the edit button is clicked
  const handleEdit = (classData)=>{
    navigate('/admin-dashboard/classes/edit', {state : {classData}})
  }

  return (
    <div className='container mt-2'>

      <ToastContainer position='top-right' autoClose={3000}/>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to={"/admin-dashboard"}>Dashboard</Link> </li>
          <li class="breadcrumb-item active" aria-current="page">Classes</li>
        </ol>
      </nav>

      <div className="card shadow p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-success mb-0">
           <i className="bi bi-journal-bookmark me-2"></i> Classes List
          </h5>

          {/* below is the button to add a new class */}
          <button className="btn btn-success" onClick={() => navigate("/admin-dashboard/classes/add")}>
           <i class="bi bi-plus-circle"></i> Add Class
          </button>
        </div>

        {/* Below we populate the classes inside of a table by use of the map function */}
        <div className="table-responsive">
          {classes.length === 0 ?(
            <div className="alert alert-warning text-center mb-0">
            <h5><i class="bi bi-exclamation-circle-fill"></i> No Classes Found</h5>
          </div>
          ):(
            <table className="table table-striped table-hover table-bordered">
              <thead className="table-success">
                <tr>
                  <th>#</th>
                  <th>Class Name</th>
                  <th>Class Level</th>
                  <th>Clas Year</th>
                  <th>Teacher</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls, index) =>(
                  <tr key={cls._id}>
                    <td>{ index + 1 }</td>
                    <td>{ cls.name }</td>
                    <td> { cls.gradeLevel }</td>
                    <td> { cls.classYear }</td>
                    <td> { cls.teacher?.name || "N/A" }</td>
                    <td> { cls.teacher?.phone || "N/A" }</td>
                    <td>
                      <button className='btn btn-sm btn-warning me-2'><i class="bi bi-pencil"
                      onClick={()=> handleEdit(cls)}></i> Edit
                      </button>

                      <button className='btn btn-sm btn-danger me-2'
                      onClick={()=> handleDelete(cls._id)}
                      ><i class="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Classes