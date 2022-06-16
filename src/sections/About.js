import React, {useState} from 'react';
import Pic from '../media/me.jpeg'
import { Button, SimpleButton } from '../components/ButtonElement.js'
import { GiBullHorns, GiWeightLiftingUp, GiTechnoHeart } from 'react-icons/gi'
import '../styles/About.css'
import { IntroBtnWrapper } from '../components/IntroParts/IntroPartsElements'
import { IoPaperPlane, IoHeartCircleSharp } from 'react-icons/io5'
import pdf from '../media/final_resume.pdf'

const About = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }

	return(
        <section style={{backgroundColor: '#C66F44', maxHeight: '1500px'}} id="about">
            <h1 style={{color: '#fff'}}>About Me</h1>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Pic} alt="Abhinav Kolli Img" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiTechnoHeart /><br></br> Career Goals</h2>
                                <p>I'm a proficient full-stack software engineer and data analyst interested in entreprenuership and cloud platforms!</p>
                            </div>
                        </article>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiBullHorns /><br></br> Current Status</h2>
                                <p>I'm an undergraduate student at UT Austin's CS and Business Honors program looking for possible internship and work opportunities!</p>
                            </div>
                        </article>
                        <article className='about__card'>
                            <div className='about__words'>
                                <h2 style={{textAlign: 'center'}}><GiWeightLiftingUp /><br></br> Hobbies</h2>
                                <p>Aside from spending hours debugging VSCode, I love weightlifting, football, binging mystery or comedy shows, and cooking!</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <IntroBtnWrapper className="button__container">
                <SimpleButton
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                color='white'>
                    <a href={pdf} style={{color: 'black'}} target="_blank" rel="noreferrer">
                        <b style={{display: 'inline-block'}}>See Resume<IoPaperPlane style={{marginLeft: '8px',
                        fontSize: '20'}}/></b>
                    </a>
                </SimpleButton>
                <Button to='contact' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                color='white'>
                <b>Get In Touch<IoHeartCircleSharp style={{marginLeft: '8px',
                fontSize: '20'}}/></b>
                </Button>
            </IntroBtnWrapper>
        </section>
    )
};

export default About;