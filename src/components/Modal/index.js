import React from 'react';

function Modal ({onClose, currentProject}) {
    const {name, description, link, gitHub} = currentProject;
    return(
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modal-title'>{name}</h3>
                <img alt='current project' src={require(`../../assets/images/${name}.png`)} />
                <p>{description}</p>
                <button onClick={onClose} type='button' className="btn btn-secondary">
                    Go Back
                </button>
                <button className="btn btn-dark">
                        <a href={link} target='blank'>Go to App</a>
                </button>
                <button className="btn btn-secondary">
                        <a href={gitHub} target='blank'>Go to Repo</a>
                </button>
            </div>
        </div>
    );
}

export default Modal;