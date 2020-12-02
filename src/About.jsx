import React from 'react';
import web from "../src/Images/img2.jpg"
import Common from './common'


const About = () => {
    return (
        <> 
           <Common name="Welcome to About page" visit="/Contact" imgsrc={web} btname="Contact Now" />
         
        </>
    );
};

export default About;