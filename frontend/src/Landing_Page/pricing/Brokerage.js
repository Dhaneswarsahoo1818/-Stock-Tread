import React from 'react';
function Brokerage() {
    return ( 
    <div className="container">
          <div className="row text-center p-5"> 
            <h5><a href="" style={{textDecoration: "none"}}> Calculate your costs upfront </a> using our brokerage calculator </h5>

            </div>
            <h3>Charges for account opening </h3>
             <div className="row border"> 
                
                <div className="col-9 border-bottom"> 
                 <h6 className=" border-bottom">Type of account </h6>
                 <p> Online account<br/>
                     Offline account<br/>
                     NRI account (offline only) 
                    Partnership, LLP, HUF, or Corporate accounts (offline only)<br/>
                  </p>
                     </div>
                 <div className="col-3"> 
                    <h6 className=" border-bottom"> Charges</h6>
                    <p> Free<br/>
                         free<br/>
                           ₹ 500 <br/>
                           ₹ 500<br/>
                     </p>
                 </div>
          </div>
          <h3 className='mt-4 mb-3'>Demat AMC (Annual Maintenance Charge)</h3>
          <div className="row border "> 
            
              <div className="col-4 "> 
               <p className='mt-3 border-top border-bottom '> Value of holdings</p>
               <p>
                  Up to ₹4 lakh<br/>
                 ₹4 lakh-₹10 lakh<br/>
                   Above ₹10 lakh<br/>
               </p>
              </div>
                  <div className="col-4 "> 
                     <p  className='mt-3 border-top border-bottom '>AMC </p>
                        
                        <p> free<br/>
                     ₹ 100 per year, charged quarterly*<br/>
                     	₹ 300 per year, charged quarterly</p>
                  </div>
                 

          </div>
           <p className="text-muted small mt-2">* Lower AMC is applicable only if the account qualifies as
                      a Basic Services Demat Account (BSDA). 
                      BSDA account holders cannot hold more
                       than one demat account. To learn more about BSDA,</p>
        </div>
        );
}

export default Brokerage;