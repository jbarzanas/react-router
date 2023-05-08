import React from 'react';
import background from "../assets/images/bg.png";

function Home() {
  return (
    <div style={{ 
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',}}>
        <h1>Welcome to My Personal Website</h1>
    </div>
  );
}

export default Home;
