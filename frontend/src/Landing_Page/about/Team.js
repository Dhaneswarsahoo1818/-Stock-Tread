import React from 'react';
function Team() {
    return (
            <div className="container">
                <div className="row ">
                    <h1 className="fs-4 text-center p-3 mt-5"> PEOPLE </h1>
                </div>
    
                <div className="row ">
                     <div className="col-6 p-5 text-center">
                        <img src='\media\images\Dhaneswar.jpg' style={{width:"60%", borderRadius:"100%"}}></img>
                        <h2 className="mt-3 mt-5">Dhaneswar Sahoo</h2>
                        <p>(Devloper)</p>
                     </div>
                      <div className="col-6 p-5">

                        <p className=" mt-5"> 
                                 <b> Dhaneswar </b>is a software developer with a passion for building innovative solutions. With expertise in full-stack development, he has contributed to various projects.</p>
                                 <p> Dhaneswar is dedicated to creating user-friendly and efficient software that meets the needs of users.create a  Stock Trading Application </p> 
                               
                                <p>here used React for the frontend and Node.js for the backend.</p> 
                                
                                 <p>The application allows users to track their stock holdings, view real-time market data, and manage their investment portfolio effectively. </p>

                            
                             <p> Connect on  <a href="" style={{textDecoration:"none"}}>Homepage</a> 
                              /<a href=""  style={{textDecoration:"none"}}>TradingQnA </a>
                              /<a href=""  style={{textDecoration:"none"}}> Twitter</a></p>
                        
                      </div>
                </div>
    
    
          
              </div>
           
        );
    }
    

export default Team;