import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import AboutMe from './AboutMe.js';
import Home from './Home.js';
import Gallery from './Gallery.js';

function App() {
    return (
        <Router>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/gallery">Gallery</Link>
            </div>
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about' element={<AboutMe/>}></Route>
                <Route exact path='/gallery' element={<Gallery/>}></Route>
            </Routes>
        </Router>
    );
}      

export default App;