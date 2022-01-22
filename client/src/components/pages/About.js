import React from 'react';
import image from '../../assets/images/TandB.png';

function About () {
    
    return (
        <section className="d-flex about-me">
            <div className='about-img'>
                <img src={image}></img>
            </div>
            <div>
                <h2>I am Ben</h2>
                <p>As a mechanical engineer by degree, after working professionally for 7 years I decided that I wanted (and needed) to make a change in my career. Working as an engineer in the consumer products industry was very enjoyable, but not what I was passionate about. I decided to pursure something I found myself to be more interested in.</p>
                <p>I signed up to be a student in Case Western Reserve University's Full Stack Web Developer Coding Bootcamp, in order to learn the in demand skills used by engineers, developers, and entrepeneurs alike. This started the next chapter of my professional career.</p>
            </div>
        </section>
    );   
}

export default About;