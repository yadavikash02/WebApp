import React from 'react'

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="#">
            Incubyte
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
            </ul>
            <ul className='d-flex'>
              <li className="nav-item mx-2">
                <a className="nav-link active text-primary" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-primary" href="#">
                  Our Experties
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-primary" aria-current="page" href="#">
                  Success Stories
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link small text-primary" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
          </div>
        </div>
      </nav>

    </div>
  )
}

export default NavBar
