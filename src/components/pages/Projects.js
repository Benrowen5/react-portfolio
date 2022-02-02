import React, { useState } from 'react';
import Modal from '../Modal';

const Projects = ({}) => {
    const projects = [
        {
            name: 'Vapor Games',
            description: "Tired of outdated and user-unfriendly styling that you've come to accept? Vapor seeks to bring modern functionality and accessibility to an all-in-one gaming service. Our application allows users to browse video games of all types and genres, view detailed information about each of them, start conversations with fellow app users about the games, and favorite games so that each user can have quick reference and access to their favorites from their dashboard. We even have some sweet swag available for purchase in our store - how sick is that? Built using MERN stack, deployment through Heroku.",
            link: 'https://vapor-games-2022.herokuapp.com',
            gitHub: 'https://github.com/Benrowen5/CoffeeWorkoutVideoGame'
        },
        {
            name: 'Ok Fido',
            description: 'OK-Fido is a full-stack, content management system-style application designed to be an easy to use and efficient way to browse adoptable pets and save the pets to your favorites for quick reference. In this application, users are able to view currently available pets that are up for adoption and save pets of interest to their user profile / dashboard. This application was created using node.js & Express.js for RESTful API, Handlebars.js as the template engine, mySQL & Sequelize for the database, and Heroku for deployment.',
            link: 'https://polar-refuge-82117.herokuapp.com/',
            gitHub: 'https://github.com/Benrowen5/ok-fido'
        },
        {
            name: 'What Should I Watch',
            description: 'What should I Watch is a random movie generator application. The app takes in user input to provide 4 random movie suggestions based on user preference regarding genre, movie score, and rating. This application was created using Javascript, HTML, CSS, Bootstrap, and utilizes third party API calls to generate movie results.',
            link: 'https://benrowen5.github.io/What-Should-I-Watch/',
            gitHub: 'https://github.com/Benrowen5/What-Should-I-Watch'
        },
        {
            name: 'Budget Tracker',
            description: 'Budget Tracker is a Progressive Web Application that can be used to track spending and overall cash flow. This app utilizes PWA features such as offline functionality as well as ability to install the app. This application features the following technologies: Express.JS, MongoDB, Node.js, IndexedDB, and Mongoose.',
            link: 'https://rocky-coast-70748.herokuapp.com',
            gitHub: 'https://github.com/Benrowen5/Budget-tracker-PWA'
        },
        {
            name: 'Password Generator',
            description: 'Create a randomized password that fits your criteria. This application runs in the browser and is responsive to various screen sizes. The functionality of the application is dependant on input provided by the user. All user input is validated in order to prevent any errors from occurring.',
            link: 'https://benrowen5.github.io/Random-password-generator/',
            gitHub: 'https://github.com/Benrowen5/Random-password-generator'
        },
        {
            name: 'Run Buddy',
            description: 'Find running companions near you! This web application was built using HTML and CSS.',
            link: 'https://benrowen5.github.io/run-buddy/',
            gitHub: 'https://github.com/Benrowen5/run-buddy'
        },
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
            <div className="d-flex projects">
                {isModalOpen && (
                    <Modal currentProject={currentProject}
                            onClose={toggleModal} />
                )}

                {projects.map(project => (
                    <div 
                        className='flex-row project' 
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