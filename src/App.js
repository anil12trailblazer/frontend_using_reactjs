import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Footer from './Footer'
import { Redirect, Route, Switch } from 'react-router-dom';
const App = () => {
    return (

        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Service" component={Service} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Redirect to ='/' />
        </Switch>     
        <Footer />
        </> 
       );
};

export default App;