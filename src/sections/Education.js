import React from 'react';
import '../styles/Education.css'
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
	return(
        <section style={{backgroundColor: '#9F585B', maxHeight: '1500px'}} id="education">
            <h1 style={{color: '#fff'}}>Education</h1>
            <div className="container education__container">
                <div className="education__school">
                    <h2><a href={`https://csb.utexas.edu/`} /><b>University of Texas at Austin - CSB Honors</b></h2>
                    <div className="education__content">
                        <article className="education__details">
                            <h3><em>Majors</em></h3>
                            <h4 style={{color: 'orange'}}>B.S. in Computer Science Honors</h4>
                            <h4 style={{color: 'orange'}}>B.B.A in Business Honors</h4>
                        </article>
                        <article className="education__details">
                            <h3><em>Relevant Coursework</em></h3>
                            <h4 style={{color: 'orange'}}>GPA: 4.0</h4>
                            <h4 style={{color: 'orange'}}>Computer Science: Data Structures (H)</h4>
                            <h4 style={{color: 'orange'}}>Mathematics: Discrete Math (H), Calculus I-III</h4>
                            <h4 style={{color: 'orange'}}>Business: Business Communications (H), Longhorn Startup Seminar</h4>
                        </article>
                        <article className="education__details">
                            <h3><em>Achievements</em></h3>
                            <h4 style={{color: 'orange'}}>USA Computing Olympiad Gold</h4>
                            <h4 style={{color: 'orange'}}>HackSMU - 1st Place State Farm Sponsor</h4>
                            <h4 style={{color: 'orange'}}>EarthXHack - 2nd Place State Farm and Oxy Sponsor</h4>
                        </article>
                        <article className="education__details">
                            <h3><em>Activities</em></h3>
                            <h4 style={{color: 'orange'}}>UT Programming Contests</h4>
                            <h4 style={{color: 'orange'}}>Freetail Hackers</h4>
                            <h4 style={{color: 'orange'}}>Texas UCF</h4>
                            <h4 style={{color: 'orange'}}>CSB Association</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Education;