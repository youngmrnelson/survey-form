import React from 'react';
import freeCodeCampLogo from './fcc_primary_large.png';

export default function Navbar() {
    return (
        <nav className="nav py-0 bg-dark">
            <div className="container flex flex-ai--c flex-jc--sb m-auto flex-d--c pi-1">
                <a href="index.html" className="logo">
                    <img
                        src={freeCodeCampLogo}
                        className="nav-logo-img"
                        alt="freeCodeCamp"
                    />
                </a>
                <ul className="nav-links flex gap-2">
                    <li>
                        <a href="https://www.linkedin.com/in/daniel-nelson-9151a6212/" target="_blank" className="nav-link p-0">Daniel Nelson
                        <i className="fa-brands fa-linkedin ml-1" aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/youngmrnelson" target="_blank" className="nav-link p-0">View The Code
                        <i className="fa-brands fa-github ml-1" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}