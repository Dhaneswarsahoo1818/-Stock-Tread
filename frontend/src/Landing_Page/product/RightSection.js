import React from 'react';
function RightSection({ imageURL, productNname, productDescription, KiteConnect,learnMore}) {
    return ( 

        
            <div className="container">
                <div className="row ">
                  
                        <div className="col-5 p-4 mt-5" >
                            <h1 className="text-center"style={{marginTop:"100px" }}>{productNname}</h1>
                            <p className="text-muted mt-3">{productDescription}</p>
                        <div className="mt-4 ml-3">
                            <a href={KiteConnect} style={{textDecoration:"none" }}>Kite Connect </a>
                            {/* <a href={learnMore} style={{textDecoration:"none" }}>Lern more </a> */}
                             
                        </div>
                 </div>
                               
            <div className="col-7">
                <img src={imageURL} alt="Product"  />
            </div>
                    </div>
                </div>
        
            );
        }
        
      
        

export default RightSection;