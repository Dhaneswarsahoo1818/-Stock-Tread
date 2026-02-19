import React from 'react';
function Hero() {
    return ( 
    <div className="container">
            <div className="row text-center">
                <h1 className=" mt-5 p-3">Pricing</h1>
                <h3 className="text-muted"> List of all charges and taxes </h3>
                </div>
                <div className="row text-center mt-5 p-5">
                 
                     <div className="col-4">
                        <img src="/media/images/pricing0.svg" alt="pricing0" style={{width: "68%"}} />
                       <h2>Free equity delivery </h2>
                       <p className="p-2"> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                     </div>
                        <div className="col-4 text-small">
                       <img src="/media/images/intradayTrades.svg" alt="intradayTrades" style={{width: "68%"}} />
                       <h2> Intraday and F&O trades</h2>
                       <p className="p-2"> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                      <div className="col-4"> <img src="/media/images/pricingMF.svg" alt="pricingMF" style={{width: "68%"}} />
                      <h2>Free direct MF</h2>
                      <p className="p-2"> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                      </div>
                      </div>
        </div>
        );
}

export default Hero;