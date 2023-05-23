import React from "react";

const Header=()=>{
    return(
          <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    {/* Container wrapper */}
    <div className="container">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample " >
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" >
            <a style={{color:"white"}} className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a style={{color:"white"}} className="nav-link" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a style={{color:"white"}} className="nav-link" href="/todo">
              Todo
            </a>
          </li>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
          <a href="/login">
          <button type="button" className="btn btn-primary me-3">
            Sign in
          </button>
          </a>
          <a
            className="btn btn-primary px-3"
            href="https://github.com/nidhi3108"
            role="button"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>
    )
}
export default Header