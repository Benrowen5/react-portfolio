import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }


    return(
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} ></input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' defaultValue={email} ></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} ></textarea>
                </div>
                {/* {errorMessage && (
                    <div>
                        <p className='error-text'></p>
                    </div>
                )} */}
                <button type='submit' data-testid='button'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;