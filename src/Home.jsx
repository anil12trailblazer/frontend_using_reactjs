import React from 'react';
import web from "../src/Images/img1.jpg"
import Common from './common';

const Home = () => {
    return (
        <>
          <Common name="Grow your business with" visit="/Service" imgsrc={web} btname="Get started" />
        </>
    );
};

export default Home;