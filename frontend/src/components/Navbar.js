import React, { Component } from 'react'

class Navbar extends Component
{
    render()
    {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-static-top" style={{marginBottom: 20}}>
                    <a className="navbar-brand" href="#">Home</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
    
}

export default Navbar;