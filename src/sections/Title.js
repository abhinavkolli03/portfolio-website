import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navigation from '../components/Navigation/Navigation'
import IntroParts from '../components/IntroParts/IntroParts';
import DisplayInfo from '../components/DisplayInfo';
import { aboutData } from '../components/DisplayInfo/Data';
import Footer from '../components/Footer'
import About from './About'

const Title = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

	return(
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navigation toggle={toggle}/>
            <IntroParts id={'title'}/>
            <About />
            <Footer />
        </div>
    )
};

export default Title;