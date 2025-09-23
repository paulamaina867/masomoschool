import React from 'react'
import { Link } from 'react-router-dom'

const HomeComponent = () => {
  return (
    <div className='homepage'>
        {/* Navbar */}
        <nav className='navbar navbar-expand-lg narbar-dark bg-success'>
            <div className="container">
                <Link className='navbar-brand text-white' to={'/'} ><b>Masomo School</b></Link>

                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                    <ul className='navbar nav'>
                        <li className='nav-item'> <a href="#about" className='nav-link text-white'>About</a></li>
                        <li className='nav-item'> <a href="#cbc" className='nav-link text-white'>CBC Curriculum</a></li>
                        <li className='nav-item'> <a href="#why-masomo" className='nav-link text-white'>Why Us?</a></li>
                        <li className='nav-item'> <Link to="/login" className='nav-link text-white'>Login</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>


        {/* Hero Section */}
        <section className="hero position-relative text-white">
            <img src="images/banner1.jpg" alt="Welcome image" className='w-100 img-fluid' style={{ maxHeight: '500px', objectFit : 'cover' }}/>

            <div className="hero-text position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded">
                <h1>Empering Minds Through Competence</h1>
                <p>Masomo School is a leading institution dedicated to providing quality Education rooted in the competency-Based curriculum (CBC) as set by the Kenyan Ministry of Education.</p>
            </div>
        </section>

        {/* About Section */}
        <section id="about" className='py-5 bg-light'>
            <div className="container">
                <h2 className='text-success text-center'>About Masomo School</h2>
                <p>
                    Masomo school is a leading institution dedicated to to providing quality Education rooted in the competency-Based curriculum (CBC) as set by the Kenyan Ministry of Education. We focus on holistiv development, creativity and real-world skills for tomorrow's leaders.
                </p>
            </div>
        </section>

        {/* CBC section */}
        <section className="py-5">
            <div className="container">
                <h2 className='text-success text-center'> Understaing CBC in Kenya </h2>
                <p>The competency Based Curriculum (CBC) was introduced to replacd the 8-4-4 system. It focuses on nurturing learner's talents and abilities through practical skill oriented learning experiences. CBC emphasizes learner-centered teaching and aims at developing competencies that align with national development goals.</p>
                <ul className='list-group list-group-flush mt-3'>
                    <li className='list-group-item'> ☑️ Focus on talent & Skills</li>
                    <li className="list-group-item"> ☑️ Learner-Centered Approach</li>
                    <li className="list-group-item"> ☑️ Real-Life Problem Solving </li>
                    <li className="list-group-item"> ☑️ Continous Assessment</li>
                </ul>
            </div>
        </section>

        {/* why us? */}
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className='text-center text-success'>
                    Why Choose Masomo School?
                </h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow p-2 h-100">
                            <div className="card-header text-center">
                                <h3>Experienced Teachers</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    Our trainers are trained in CBC and are commited to student growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow h-100 p-2">
                            <div className="card-header text-center">
                                <h3>Modern Facilities</h3>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    We provide state of the art labs, libraries and learning spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow h-100 p-2">
                            <div className="card-header text-center">
                                <h3>Co-Curriculum Activies</h3>
                            </div>
                            <div className="card-body">
                                <p>
                                    Students explore sports, arts, tech and leadership beyond books
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 text-center">
            <div className="container">
                <h2 className='text-success'>Join Masomo School Today!</h2>
                <p>Enroll your child in a school that build future ready citizens</p>
                <a href="#">Apply Now</a>
            </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-dark text-white text-center py-3">
            <p className="mb-0">
                &copy; {new Date().getFullYear()} Masomo School. All rights reserved.
            </p>
        </footer>

    </div>
  )
}

export default HomeComponent