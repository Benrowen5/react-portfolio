import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({}) => {
    const projects = [
        {
            name: 'What Should I Watch',
            description: 'What should I Watch is a random movie generator application. The app takes in user input to provide 4 random movie suggestions based on user preference regarding genre, movie score, and rating.',
            link: 'https://benrowen5.github.io/What-Should-I-Watch/'
        },
        {
            name: 'Ok Fido',
            description: 'Ok Fido description',
            link: 'https://polar-refuge-82117.herokuapp.com/'
        }
    ];
    // const currentProjects = projects.
    const [isModalOpen, setIsModalOpen] = useState(false);
   
    const [currentProject, setCurrentProject] = useState();

    const toggleModal = (project) => {
        setCurrentProject(project);
        console.log(currentProject);
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section>
            <div className="d-flex">
                {isModalOpen && (
                    <Modal currentProject={currentProject}
                            onClose={toggleModal} />
                )}

                {projects.map(project => (
                    <div 
                        className='flex-row projects' 
                        key={project.name} 
                        onClick={() => {
                            toggleModal(project)
                        }}
                    >
                        <h3>{project.name}</h3>
                        <p>Click to learn more</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;