import React from 'react';
import background from "../assets/images/bg2.jpg";
import Image1 from '../assets/images/selfie1.png';
import Image2 from '../assets/images/selfie2.png';
import Image3 from '../assets/images/selfie3.png';
import Image4 from '../assets/images/selfie4.png';
import Image5 from '../assets/images/selfie5.png';
import Image6 from '../assets/images/friends1.png';
import Image7 from '../assets/images/friends2.png';
import Image8 from '../assets/images/friends3.png';
import Image9 from '../assets/images/friends4.png';
import Image10 from '../assets/images/friends5.png';
import Image11 from '../assets/images/adventure1.png';
import Image12 from '../assets/images/adventure2.png';
import Image13 from '../assets/images/adventure3.png';
import Image14 from '../assets/images/adventure4.png';
import Image15 from '../assets/images/adventure5.png';

function Gallery() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <h1>GALLERY</h1>
            <div className='gallery'>
                <h4>Selfies</h4>
                <div className='selfies'>
                    <img src={Image1} alt='eren'/>
                    <img src={Image2} alt='eren'/>
                    <img src={Image3} alt='eren'/>
                    <img src={Image4} alt='eren'/>
                    <img src={Image5} alt='eren'/>
                </div>
                <h4>Family & Friends</h4>
                <div className='friends'>
                    <img src={Image6} alt='eren'/>
                    <img src={Image7} alt='eren'/>
                    <img src={Image8} alt='eren'/>
                    <img src={Image9} alt='eren'/>
                    <img src={Image10} alt='eren'/>
                </div>
                <h4>Adventures</h4>
                <div className='adventure'>
                    <img src={Image11} alt='eren'/>
                    <img src={Image12} alt='eren'/>
                    <img src={Image13} alt='eren'/>
                    <img src={Image14} alt='eren'/>
                    <img src={Image15} alt='eren'/>
                </div>
            </div>
        </div>
    );
}      
    
export default Gallery;