import React from 'react'
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
      <>
      <hr></hr>
        <nav className={`navbar navbar-expand-lg fixed-top navbar-light bg-light`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <div className='d-flex'>
          <button type="button" className="btn btn-dark">Start Free Trial</button>
          <button type="button" className="btn btn-warning">Login</button>
        </div>
        </div>
      </nav>
      
      </>
    )
}
Navbar.propTypes= {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps= {
    title: "MyApp",
}