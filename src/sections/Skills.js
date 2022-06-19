import React from 'react'
import '../styles/Skills.css'


const Skills = () => {
  return (
    <section style={{background: 'linear-gradient(#4C1B76, #BB496B)'}} id="skills">
        <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" style={{color: '#fff'}}>Tech Stack</h1>
        <h5 className="h5_subtitle" style={{marginBottom: '-60px'}}>Here's a list of tech that I've picked up or used recently. This includes technologies I use for full-stack software engineering, data analysis, and designing/planning.</h5>
        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container  skills__container">
            <div className="skills__title">
                <h2><b>Languages and Databases</b></h2>
            </div>
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src='/languages/python.png' alt="Python Icon" /><span style={{color: 'white'}}>Python</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/java.png' alt="Java Icon" /><span style={{color: 'white'}}>Java</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/javascript.png' alt="JavaScript Icon" /><span style={{color: 'white'}}>JavaScript</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/typescript.png' alt="TypeScript Icon" /><span style={{color: 'white'}}>TypeScript</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/c++.png' alt="C++ Icon" /><span style={{color: 'white'}}>C++</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/csharp.png' alt="C# Icon" /><span style={{color: 'white'}}>C#</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/html5.png' alt="HTML5 Icon" /><span style={{color: 'white'}}>HTML5</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/css3.png' alt="CSS3 Icon" /><span style={{color: 'white'}}>CSS3</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/sass.png' alt="Sass Icon" /><span style={{color: 'white'}}>Sass</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/bash.png' alt="Bash Icon" /><span style={{color: 'white'}}>Bash</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/mysql.png' alt="MySQL Icon" /><span style={{color: 'white'}}>MySQL</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/mongodb.png' alt="Java Icon" /><span style={{color: 'white'}}>MongoDB</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/swift.png' alt="Swift Icon" /><span style={{color: 'white'}}>Swift</span>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container-reverse">
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src='/languages/react.png' alt="React.js Icon" /><span style={{color: 'white'}}>React.js</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/nodejs.png' alt="Node.js Icon" /><span style={{color: 'white'}}>Node.js</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/bootstrap.png' alt="Bootstrap Icon" /><span style={{color: 'white'}}>Bootstrap</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/flask.png' alt="Flask Icon" /><span style={{color: 'white'}}>Flask</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/django.png' alt="Django Icon" /><span style={{color: 'white'}}>Django</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/selenium.png' alt="Selenium Icon" /><span style={{color: 'white'}}>Selenium</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/tensorflow.png' alt="Tensorflow Icon" /><span style={{color: 'white'}}>Tensorflow</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/keras.png' alt="Keras Icon" width="50" height="50"/><span style={{color: 'white'}}>Keras</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/pytorch.png' alt="Pytorch Icon" width="50" height="50"/><span style={{color: 'white'}}>Pytorch</span>
                    </div>
                </div>
            </div>
            <div className="skills__title">
                <h2><b>Frameworks</b></h2>
            </div>
        </div>
        <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container">
            <div className="skills__title">
                <h2><b>Libraries</b></h2>
            </div>
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src='/languages/numpy.png' alt="Numpy Icon" /><span style={{color: 'white'}}>Numpy</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/pandas.png' alt="Pandas Icon" width="50" height="50"/><span style={{color: 'white'}}>Pandas</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/opencv.png' alt="OpenCV Icon" /><span style={{color: 'white'}}>OpenCV</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/scikit-learn.png' alt="Scikit-Learn Icon" width="50" height="50"/><span style={{color: 'white'}}>Sklearn</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/redux.png' alt="Redux Icon" /><span style={{color: 'white'}}>Redux</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/materialui.png' alt="MaterialUI Icon" /><span style={{color: 'white'}}>MaterialUI</span>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400"
        className="container skills__container-reverse">
            <div className='skills__content'>
                <div className="skills__container-tech-stack">
                    <div className="skill">
                        <img src='/languages/aws.png' alt="AWS Icon" /><span style={{color: 'white'}}>AWS</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/git.png' alt="Git Icon" /><span style={{color: 'white'}}>Git</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/firebase.png' alt="Firebase Icon" /><span style={{color: 'white'}}>Firebase</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/heroku.png' alt="Heroku Icon" /><span style={{color: 'white'}}>Heroku</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/trello.png' alt="Trello Icon" /><span style={{color: 'white'}}>Trello</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/sketch.png' alt="Sketch Icon" /><span style={{color: 'white'}}>Sketch</span>
                    </div>
                    <div className="skill">
                        <img src='/languages/figma.png' alt="Figma Icon" width="50" height="50"/><span style={{color: 'white'}}>Figma</span>
                    </div>
                </div>
            </div>
            <div className="skills__title">
                <h2><b>Tools and Design</b></h2>
            </div>
        </div>
    </section>
  )
}

export default Skills