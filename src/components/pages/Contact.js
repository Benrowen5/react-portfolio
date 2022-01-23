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
            <h1>Contact Me</h1>
            <form id='contact-form' className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' className="form-control" name='name' defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' className="form-control" name='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' className="form-control" rows='5' placeholder='What up?' defaultValue={message} onBlur={handleChange}></textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}                
                <button type='submit' className="btn btn-primary" data-testid='button'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;