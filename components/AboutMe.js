import React from 'react';
import background from "../assets/images/bg1.png";
import Image from '../assets/images/eren.gif';

function AboutMe() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <h1>ABOUT ME</h1>
            <img src={Image} alt='eren' id='eren-about-me' />
            <div className='about-me'>
                <p>Eren Yeager is a passionate, courageous young man who has always protected the people he loves. He wants to become a Scout in order to eliminate Titans and help humanity achieve a future outside the wall. No matter what, he doesn’t want to be a caged animal just waiting for Titans to break through the wall and destroy everything.When Eren’s mother is eaten by a Titan, Eren’s thoughts turn toward vengeance. He still wants the same thing — freedom — but there is a bloodthirsty quality to his vows that clouds his starry-eyed conviction. Additionally, once Eren learns he can transform into a Titan, his own impressive perseverance and this newfound ability combine to form someone who knows exactly how he can get what he wants. At this point, though, it’s just to save his Scout Regiment family from Titans.</p>
            </div>
        </div>

    );
}      
    
export default AboutMe;