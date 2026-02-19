import React from 'react';
function Universe() {
    return ( 
    <div className="container mt-5 mb-5">
        <div className='row text-center'>
            <h1>Universe Section</h1>
            <p> Extend your trading and investment experience even further with our partner platforms</p>
    
         
                <div className="col-4 p-3 mt-4">
                    <img src="media/images/zerodhafundhouse .png" alt="smallcaseLogo" style={{width: "68%"}} />
                    <p className='text-muted text-small mt-3'>Our asset management venture<br/>
                    that is creating simple and transparent index<br/>
                    funds to help you save for your goals.
                    </p>
                </div>

                
                  <div className="col-4 p-3 mt-5">
                       <img src="media/images/sensibullLogo.svg" alt="universe1" style={{width: "68%"}} />
                          <p className='text-muted text-small mt-3'> Options tradingplatforn that lets you <br/>
                          create strategies, analyse positions,and examine <br/>
                          data poinrs lije open interest,FII/DII.and more.
                    </p>
                  </div>


                  <div className="col-4 p-3 mt-4">
                           <img src="media/images/tijori.svg" alt="tijori"  style={{width: "48%"}}/>

                           <p className='text-muted text-small mt-3'>Investment research platform<br/>
                           that offers detailed insighrs in stocks,<br/>
                           sectors,supply chains,and more. 
                              </p>
                    </div>


                    <div className="col-4 p-3 mt-4">
                       <img src="media/images/streakLogo.png" alt="universe1" style={{width: "48%"}} />
                          <p className='text-muted text-small mt-3'>Systematic trading <br/>
                             that allows us you to create and backtest <br/>
                             strategies without coading.
                         </p>
                    </div>

                    <div className="col-4 p-3 mt-4">
                      <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo" />
                        <p className='text-muted text-small mt-3'>Thematic investing platform <br/>
                           that helps you invest in diversified<br/>
                            portfolios of stocks and ETFs.
                        </p>
                    </div>

                       <div className="col-4 p-3 mt-4">
                           <img src="media/images/dittoLogo.png" alt="universe1"  style={{width: "48%"}}/>
                             <p className='text-muted text-small mt-3'>Personalized   advice on life<br/>
                                      and health insurance. No spam  <br/>
                                      and no mis-selling.
                             </p>
                       </div>

                 </div>
        </div>
        );
}

export default Universe;