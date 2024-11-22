import React from 'react';
import {Link} from 'react-router-dom'; 
import './homePage.css';
import logo from '../assets/LionsLineup.png'
import heroBackground from '../assets/heroimage.png'
import MainComponent from '../components/maincomponent'
import Tabs from '../components/Tabs/Tabs';

const HomePage = () => {
    return(
        <>
        <div className='home-page'>
            <nav className='navbar'>
                <div className="logo-container">
                    <img src={logo} alt="LionsLineup Logo" className="logo" />
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </nav> 

            {/* Hero Section */}
            <div
            className="hero-section"
            style={{ backgroundImage: `url(${heroBackground})` }}
            >
                <div className='hero-content'>
                    <h1 className="hero-title">
                        <span>L</span>ions<span>L</span>ineup
                    </h1>
                    <p className="hero-subtitle">Sri Lankan T20 Squad Selection Predictor</p>
                    <button className="hero-button">CHECK NOW!</button>
                </div>
            </div>
            
        </div>
        <Tabs />
        </>
    )
}

export default HomePage;
