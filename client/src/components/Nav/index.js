import React, {useEffect} from 'react';
import image from '../../assets/images/logoHead3.png';
// import background from '../assets/images/background.png';

function Nav (props) {
    const pages = ['Home', 'About', 'Projects', 'Contact', 'Resume'];
    return (
        <header className="header">
            <div className="title">
                <a href='/'>
                <img src={image} />
                </a>
                <h2>
                    <a href='/'>
                        My Portfolio
                    </a>
                </h2>
                
                
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