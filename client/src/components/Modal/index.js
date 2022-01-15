import React from 'react';

function Modal ({onClose, currentProject}) {
    const {name, description, index} = currentProject;
    return(
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>{name}</h3>
                {/* <img alt='current project' src={require(`../../assets/large/${category}/${index}.jpg`)} /> */}
                <p>
                    {description}
                </p>
                <button onClick={onClose} type='button'>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;