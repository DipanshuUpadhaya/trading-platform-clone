import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg:how do i activate F&O, why is my order getting rejected.."
            className="form-control p-3"
          ></input>
          <br />
          <a href="" className="">Track account opening</a>
          <a href="" className="mx-3">Track segment activation</a>
          <a href="" className="mx-3">Intraday margins</a>
          <a href="" className="mx-3">Kite user manual</a>
        </div>
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br/>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
