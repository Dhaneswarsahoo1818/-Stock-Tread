import React from 'react';
function LeftSection({ imageURL, productNname, productDescription, tryDemo, learnMore, googlePlay, appStore, }) {
    return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-7">
                <img src={imageURL} alt="Product"  />
                </div>
                <div className="col-5 mt-4 p-4">
                    <h1 className="text-center">{productNname}</h1>
                    <p className="text-muted">{productDescription}</p>
                    <div className="mt-4 ml-3">
                    <a href={tryDemo} style={{textDecoration:"none" }}>TryDemo</a>
                     <a href={learnMore} style={{textDecoration:"none",marginLeft:"100px" }}>LearnMore</a>
                     </div>
                        <div className="d-flex gap-3 mt-3">
                    <a href={googlePlay} style={{textDecoration:"none" }}><img src="media/images/googlePlayBadge.svg"/></a>
                    <a href={appStore} style={{textDecoration:"none" }}><img src="media/images/appstoreBadge.svg"/></a> </div>




                     </div>
             </div>
        </div>

    );
}

export default LeftSection;