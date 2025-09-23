import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const DashboardNavbar = () => {
    // get the logged in user and the logout function by use of the useContent hook inside of AuthContex
    const { user, logout} = useContext(AuthContext)

  return (
    <nav className="navbar navbar-expand-md bg-white shadow-sm px-4 py-2 mb-3 rounded">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <span className="navbar-brand fw-bold text-success fs-4">
                Masomo School
            </span>

            <div className="d-flex align-items-center">
                <span className='me-3 text-info'>
                    <strong>{ user?.name }</strong>
                    <small className='text-muted'>({user?.role})</small>
                </span>

                <button className='btn btn-sm btn-outline-danger d-flex align-items-center' onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar;