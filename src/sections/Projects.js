import React from 'react';
import '../styles/Projects.css'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'

const Projects = () => {
    const projectsList = [
        {
            id: 1,
            image: '/projects/algorimage_ss.png',
            title: 'Algorimage: Pathfinder',
            description: 'A pathfinding visualizer that tests various algorithms (A*, Djikstra, Greedy, BFS, DFS) under different heuristics. The user can also change end points, add/randomize walls, and increase wall density.',
            github: 'https://github.com/abhinavkolli03/algorimage',
            demo: '',
            demo_present: false,
            skillsList: ['react.js', 'HTML', 'CSS', 'JS']
        },
        {
            id: 2,
            image: '/projects/stock_bot.png',
            title: 'The Stock Bot',
            description: 'A Tensroflow Keras DQN bot that took in an ARIMA-LSTM model\'s results and simulated when it would trade, buy, or sell stocks through reinforcement learning.',
            github: 'https://github.com',
            demo: 'https://github.com/abhinavkolli03/StockBot-Research/blob/main/Final%20Research%20Paper.pdf',
            demo_present: true,
            skillsList: ['python', 'numpy', 'pandas', 'Tensorflow-Keras']
        },
        {
            id: 3,
            image: '/projects/personal-site_ss.png',
            title: 'Personal Website V1',
            description: 'My personal website that\'s used to display my portfolio and resume in more detail. I hope to make improvements using different frameworks in the future.',
            github: 'https://github.com/abhinavkolli03/portfolio-website',
            demo: 'https://abhinavkolli03.github.io/portfolio-website/',
            demo_present: true,
            skillsList: ['react.js', 'HTML', 'CSS', 'JS', 'Styled-Components', 'Firebase', 'Firestore Database']
        },
        {
            id: 4,
            image: '/projects/Messenger.png',
            title: 'Messenger: 2D Ship Game',
            description: 'A videogame where the the user, or messenger, must carry a message to home base, while traversing through three rounds of enemy ships, asteroids, and bosses.',
            github: 'https://github.com/abhinavkolli03/MessengerGame',
            demo: '',
            demo_present: false,
            skillsList: ['C#', 'VSCode']
        },
    ]

	return(
        <section style={{background: 'linear-gradient(#e83b36, #bb5c06)', paddingBottom: '2rem'}}  id="projects">
            <h1 style={{marginTop: '-60px'}} data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">Projects</h1>
            <div className="container">
                <h5 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" className="h5_subtitle">Below you can find a selection of personal or professional projects I've been working on. For these, you can check out both the code and a possible live link of the project. To date, I've completed <b>{projectsList.length}</b> projects.</h5>
                <div className="projects__container">
                    {projectsList.map(({id, image, title, description, github, demo, demo_present, skillsList}) => {
                        if(demo_present) {
                            return(
                                <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" key={id} className="projects__item">
                                    <div className="projects__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h4 className="projects__item-title"><b>{title}</b></h4>
                                    <h5 className="projects__item-title">{description}</h5>
                                    <div className="projects__skills-tech-stack">
                                        {skillsList.map(skill => {
                                            return(
                                                <div className="projects__skill">
                                                    <p style={{color: 'white'}}>{skill}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='projects__item-buttons'>
                                        <a href={github} target='_blank'><AiFillGithub size={30}/></a>
                                        <a href={demo} target='_blank'><AiOutlineLink size={30}/></a>
                                    </div>
                                </article>
                            );
                        }
                        return(
                            <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" key={id} className="projects__item">
                                <div className="projects__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h4 className="projects__item-title"><b>{title}</b></h4>
                                <h5 className="projects__item-title">{description}</h5>
                                <div className="projects__skills-tech-stack">
                                    {skillsList.map(skill => {
                                        return(
                                            <div className="projects__skill">
                                                <p style={{color: 'white'}}>{skill}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='projects__item-buttons'>
                                    <a href={github} target='_blank'><AiFillGithub size={30}/></a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default Projects;