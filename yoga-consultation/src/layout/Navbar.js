import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                
                    <Link className="navbar-brand " to="/">
                    <img src="/yoga1.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top"/>
                        
                        YOGA CONSULATION APPLICATION
                    </Link>
                    <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="btn btn-outline-light" to="/adduser">Add Record</Link>
                </div>
            </nav>

        </div>
    )
}
