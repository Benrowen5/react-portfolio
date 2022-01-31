import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
    
    const [errorMessage, setErrorMessage] = useState('');
    
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
                console.log(errorMessage);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }


    return(
        <section className="contact-section">
            <h3>Contact Me</h3>
            <div>
                <p className="contact-intro">For any inquiries, please reach out to me at the contact methods below, or say hello on social media via the links at the bottom of this page.</p>
                <h4>Email: </h4>
                <p>benrowentv@gmail.com</p>
                <h4>Phone: </h4>
                <p>440.223.9879</p>
            </div>
        </section>
    );
}

export default Contact;