import React from 'react';

function Footer () {
    return (
        <footer>
            &copy;2022 BenRowen
            <div className='socials-foot'> 
                    <a href='https://www.linkedin.com/in/benjamin-rowen/' target='blank' rel="noreferrer">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedIn icon"/>
                    </a>
                    <a href='https://github.com/Benrowen5' target='blank' rel="noreferrer">
                        <img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="Github icon"/>
                    </a>
                    <a href='https://www.instagram.com/benjamrow/' target='blank' rel="noreferrer">
                        <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="instagram icon"/>
                    </a>
                </div>
        </footer>
    )
}

export default Footer;