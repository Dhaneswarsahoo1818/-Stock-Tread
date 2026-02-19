import React from 'react';

import HeroSection from './HeroSection';
import Awards from './Awards';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Prising';
import Footer from '../../Footer';
import Navbar from '../../NavBar';
import CreateAccount from '../../createAccount';
function Homepage() {
    return (
        <div className="homepage">
        
            
            <HeroSection />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <CreateAccount />
           
        </div>
    );
}

export default Homepage;
