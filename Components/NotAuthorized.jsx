import React from 'react'

import { useNavigate } from 'react-router-dom'

const NotAuthorized = () => {

    const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-lihght px-3">
        <div className="text-center p-5 bg-white shadow-sm rounded-4 norder max-auto" style={{ maxWidth : '500px' }}>
            <h1 className="mt-4 fs-4 fw-bold text-danger">
                Access Denied...!
            </h1>
            <p className='mt-2 text-muted'>
                You do not have permission to View this page. Please Contact your Admin or go back.
            </p>

             <button
            onClick={ ()=> navigate(-1)}
            className='btn btn-outline-primary btn-sm d-flex align-items-center'
            >
                Go back
            </button>
        </div>
    </div>
  )
}

export default NotAuthorized