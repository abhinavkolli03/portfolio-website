import React, { useState, useEffect } from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavigationElements';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import pdf from '../../media/final_resume.pdf'
import { SimpleButton } from '../ButtonElement'

const Navigation = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const [hover, setHover] = useState(false)

    const onHover = () => {
      setHover(!hover)
    }

    const changedNav = ({ toggle }) => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changedNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{color: '#ff8606'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>@abhinavkolli</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-37}>
                                    About
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="education">Education</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills">Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="experience">Experience</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects">Projects</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <SimpleButton
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            color='white'>
                            <a href={pdf} style={{color: 'black'}} target="_blank" rel="noreferrer">
                                <b style={{display: 'inline-block'}}>Download CV</b>
                            </a>
                        </SimpleButton>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
  )
}

export default Navigation;