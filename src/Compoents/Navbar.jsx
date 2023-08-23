import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light h-200">
    <Link className="navbar-brand" to="/">LiveCricInfo</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        
          <Link className="nav-link" to="/News" >News</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/PastMatches" >Past Matches</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/UpcomingMatches">Upcoming Matches</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/Teams" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Teams
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">India</a>
            <a className="dropdown-item" href="#">Australia</a>
            <a className="dropdown-item" href="#">South africa</a>
          </div>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Livematches">Live Matches</Link>
        </li>
      </ul>
    </div>
  </nav><Outlet/></div>
  )
}
