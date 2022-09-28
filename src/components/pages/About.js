import React from 'react';
import image from '../../assets/images/TandB.png';

function About () {
    
    return (
        <section className="d-flex about-me">
            <div className='about-img'>
                <img src={image} alt="Ben and wife"></img>
            </div>
            <div>
                <h3>About Me</h3>
                <p>As a mechanical engineer by degree, after working professionally for 7 years I decided that I wanted (and needed) to make a change in my career. Working as an engineer in the consumer products industry was very enjoyable, but not what I was passionate about. I decided to pursue something I found myself to be more interested in.</p>
                <p>I made the decision to sign up for Case Western Reserve University's Full Stack Web Developer Coding Bootcamp. Through this program I would learn the in demand skills used by software engineers, web developers, and entrepreneurs alike, and begin my journey to becoming a professional developer.</p>
                <p>Some of my interests and hobbies include: coding, home improvement projects, weight lifting, running and hiking, ice hockey, dogs, coffee, self-improvement, guitar, and continuous learning.</p>
            </div>
        </section>
    );   
}

export default About;