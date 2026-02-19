import React from 'react';

function Awards() {
    return ( 
          <div className="container p-5 mb-5">
             <div className="row ">
                <div className="col-6">
                 <img src=" media/images/largestBroker.svg" alt="Largest Broker Award" className="mb-5" />
                    </div>
                   < div className="col-6 p-3" >
                   <h1> Largest Broker Award in 2025</h1>
                     <p> We are proud to announce that we have been recognized as the Largest Broker in 2025,
                        more than 10 million members trust our platform for their trading needs. 
                        also we crate a lotery code for our members to win exciting prizes every month.
                        </p>

                      <div className="row ">
                        <div className="col-6 mt-3">
                            <ul>
                                <li>Options</li>
                                <li>Forex</li>
                                <li>Commodities</li>
                            </ul>
                            
                             </div>
                          <div className="col-6 mt-3">
                              <ul>
                                <li>Commodities</li>
                                <li>currency</li>
                                <li>Stock</li>
                            </ul>
                            
                          </div>
                        </div>




                   <img src="\media\images\pressLogos.png" alt="Press Logos" className="mb-5" />
                </div>
              </div>
            </div>
        
     );
}

export default Awards;