import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img src={imageURL} className="img-fluid"></img>
        </div>

        <div className="col-lg-6 col-md-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media\images\googlePlayBadge.svg"
                className="img-fluid"
              ></img>
            </a>
            <a href={appStore}>
              <img
                src="media\images\appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                className="img-fluid"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
