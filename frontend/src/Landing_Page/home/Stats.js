import React from 'react';


function Stats() {
    return (  
        <div className="container p-5 mb-5">
            <div className="row p-5">
                <div className="col-6 p-5">
                   <h1>Trust with confidence</h1>
                   <br></br>
                    <h3 className='fs-2'>Customer-first always</h3>
                    <p className='fs-4'> That's why 1.6+ crore customers trust Zerodha with
                         ~ ₹6 lakh crores of equity investments,
                          making us India’s largest broker;
                           contributing to 15% of daily retail
                            exchange volumes in India.</p>

                            <h3> No spam or gimmicks</h3>
                            <p className='fs-4'>No gimmicks, spam, "gamification",
                                 or annoying push notifications.
                                  High quality apps that you use at your pace,
                                   the way you like. Our philosophies.</p>
                             <h3> The Zerodha universe</h3>
                             <p className='fs-4'> Not just an app,
                                 but a whole ecosystem.
                                  Our investments in 30+
                                   fintech startups offer you 
                                   tailored services specific 
                                   to your needs.</p>
                             <h3>Do better with money </h3>
                             <p className='fs-4'>With initiatives like<a> Nudge</a> and Kill Switch, 
                                we don't just facilitate transactions,
                               but actively help you do better with your money. </p>
                    </div>
                    <div className="col-6">

                        <img src="media/images/ecosystem.png" alt="Stats Image" style={{width:"75%"}} />
                        <div className="text-center">
                            <a href=" " className='mx-5' style={{textDecoration:"none"}}> Explore out Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                             <a href=" " className='mx-5' style={{textDecoration:"none"}}>Try Kite Demo <i class="fa fa-long-arrow-right" ></i></a> 
                        </div>
                     </div>
                 
            </div>

                        
        </div>

    );
}

export default Stats;

