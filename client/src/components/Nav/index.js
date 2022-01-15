import React from 'react';

function Nav () {
    return (
        <header className="header">
            <div>
                <h2>
                    <a href='/'>
                        Ben Rowen's Online Portfolio
                    </a>
                </h2>
            </div>
            <nav>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );   
}

export default Nav;