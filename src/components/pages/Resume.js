import React from 'react';

function Resume () {
    
    return (
        <section className="resume-section">
            <div className='skills'>
                <h3>Proficiencies:</h3>
                <img src="https://img.icons8.com/color/50/000000/javascript--v1.png" alt="Javascript icon"/>
                <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML5 icon"/>
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="NodeJS icon"/>
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB icon"/>
                <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="Heroku icon"/>
                <img src="https://img.icons8.com/ios-filled/50/000000/git.png" alt="Git source control icon"/>
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React icon"/>
                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3 icon"/>
            </div>
            <div>
                <h4>Click below to view/download my resume.</h4>
                    <a href= 'https://drive.google.com/file/d/1kYDr1ZmsapvhIT3K8Ebv9kIwZZofXuRD/view?usp=sharing' target="_blank" rel="noreferrer">
                        <img src="https://img.icons8.com/office/80/000000/pdf.png" alt='pdf resume download'/>                
                    </a>
                    <p>Benjamin Rowen Resume</p>
            </div>
        </section>
    );   
}

export default Resume;
