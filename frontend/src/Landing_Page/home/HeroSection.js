import React from 'react';


function HeroSection() {
    return ( 
        <div className="container p-5 mb-5">
             <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-5" />
                 <h1 className="mt-5">Welcome to Our Platform</h1>
                 <p> this is a open source platform where you can give your time and income money 
                    , created by <b>Dhaneswar Sahoo</b> and his project name is Zerodha Stock tradeing Platform.
                    It is a clone app where i use my knowledge about MERN..

                 </p>
             <button className="btn btn-primary " 
             style={{width:"20%",margin:"auto"}}> Sign Up</button>                
             
             
             
             </div>
            
            
            
             </div>

            
            
     );
}

export default HeroSection;



