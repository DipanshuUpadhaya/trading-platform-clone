import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{textDecoration:"none"}}> 
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
