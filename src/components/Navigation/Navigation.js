import React from 'react';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavigationElements';
import {FaBars} from 'react-icons/fa'

const Navigation = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='title'>@abhinavkolli</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
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
                <NavBtn>
                    <NavBtnLink to="/resume">Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navigation;