import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Notfound = () => {

    const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light text-center p-3">
        {/* Error code */}
        <h1 className="display-1 fw-bold text-primary mb-0">
            404
        </h1>

        {/* message */}
        <p className="lead mt-2 mb-4 text-mute">
            Oops! The page you're looking for doesn't Exist.
        </p>

        {/* Declare links to navigate the user back or take him/her on home page*/}
        <div className="d-flex gap-3 flex-wrap">
            <button
            onClick={ ()=> navigate(-1)}
            className='btn btn-outline-primary btn-sm d-flex align-items-center'
            >
                Go back
            </button>
            <Link
            to="/"
            className='btn btn-outline-primary btn-sm d-flex align-items-center'
            >
                Home
            </Link>
        </div>
    </div>
  )
}

export default Notfound