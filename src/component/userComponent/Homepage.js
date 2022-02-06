import React from 'react';
import Header from '../../layouts/Header';
import Slider from './Slider';
import Footer from '../../layouts/Footer';
import Hero from '../userComponent/Hero'
function Homepage(props) {
    return (
        <div>
            <Header />
            <Slider />
            <Hero/>
            <Footer/>
    
        </div>
    );
}

export default Homepage;