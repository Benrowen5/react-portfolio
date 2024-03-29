import React from 'react';
import image from '../../assets/images/logoHead3.png';
// import background from '../assets/images/background.png';

function Nav (props) {
    const pages = ['Projects', 'About', 'Contact', 'Resume'];
    return (
        <header className="header colorChanger">
            <div className="title">
                <a href='https://benrowen5.github.io/react-portfolio'>
                    <img className="me-logo" src={image} alt="" />
                </a>
                <a href='https://benrowen5.github.io/react-portfolio'>
                    <h2>
                        Benjamin Rowen
                    </h2>
                </a>
                {/* <div className='socials'> 
                    <a href='https://www.linkedin.com/in/benjamin-rowen/' target='blank'>
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                    </a>
                    <a href='https://github.com/Benrowen5' target='blank'>
                        <img src="https://img.icons8.com/material-sharp/48/000000/github.png"/>
                    </a>
                    <a href='https://www.instagram.com/benjamrow/' target='blank'>
                        <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    </a>
                </div> */}
                
                
            </div>
            <nav>
                <ul className="nav nav-tabs justify-content-center">
                   {pages.map(page => (
                        <li className="nav-item" key={page}>
                            <a 
                                href={'#' + page.toLowerCase()}
                                // Set current page is set via the setCurrentPage prop
                                onClick={() => props.setCurrentPage(page)}
                                className={props.currentPage === page ? 'nav-link active' : 'nav-link'}
                            >
                            {page}
                            </a>
                        </li>
                   ))}
                </ul>
            </nav>
        </header>
    );   
}

export default Nav;