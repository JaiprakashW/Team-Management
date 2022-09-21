import React from 'react';
import './navbar.css';


function Navbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light mt-3">
        <div class="container-fluid">
          <a className="navbar-brand" href="/">Task Manager  </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p ">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p ">
              <a className="nav-link active" aria-current="page" href="/">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p ">
              <a className="nav-link active" aria-current="page" href="/">About Us</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control ms-2 lg-1 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item p ">
                <a className="nav-link active" aria-current="page" href="F:\adminpanel\src\components\signup.js">Sign Up</a>
              </li>

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Task Manager
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="https://documenter.getpostman.com/view/1680612/TVCcWor7">Create Task</a></li>
                  <li><a className="dropdown-item" href="/">Assign a Task to User</a></li>
                  <li><a className="dropdown-item" href="/">Update Task</a></li>
                  <li><a className="dropdown-item" href="/">Delete Task</a></li>
                </ul>

                <form className="d-flex" role="search"></form>

              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}
export default Navbar;