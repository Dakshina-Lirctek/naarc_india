import React, { Component } from "react";
import "./Update.css";
import update1 from "../../images/update1.JPG";
import update2 from "../../images/update2.jpg";
import update3 from "../../images/update3.jpg";

export default class Update extends Component {
  render() {
    return (
      <div style={{marginTop:"5%",}}>
        <div style={{paddingTop:"20px"}} class="container">
          <div class="title h1 text-center">Latest Events</div>
          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-4">
                <div style={{minHeight:"250px",paddingTop:"50px"}} class="card-block px-6">
                  <h4 class="card-title">
                    Horizontal Card with Carousel - Bootstrap 4{" "}
                  </h4>
                  <p class="card-text">
                    The Carousel code can be replaced with an img src, no
                    problem. The added CSS brings shadow to the card and some
                    adjustments to the prev/next buttons and the indicators is
                    rounded now. As in Bootstrap 3
                  </p>
                  <p class="card-text">
                    Made for usage, commonly searched for. Fork, like and use
                    it. Just move the carousel div above the col containing the
                    text for left alignment of images
                  </p>
                  <br></br>
                  <a style={{backgroundColor:"#66fcf1"}} href="#" class="mt-auto btn  ">
                    Read More
                  </a>
                </div>
              </div>

              <div class="col-md-5">
              <img src={update1} style={{width:"100%",marginTop:"50px"}} class="img-fluid" alt="Responsive"/>
              </div>
            </div>
          </div>
          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-3">
                <div style={{minHeight:"300px",paddingTop:"70px"}}  class="card-block px-6">
                  <h4 class="card-title">
                    Horizontal Card with Carousel - Bootstrap 4{" "}
                  </h4>
                  <p class="card-text">
                    The Carousel code can be replaced with an img src, no
                    problem. The added CSS brings shadow to the card and some
                    adjustments to the prev/next buttons and the indicators is
                    rounded now. As in Bootstrap 3
                  </p>
                  <p class="card-text">
                    Made for usage, commonly searched for. Fork, like and use
                    it. Just move the carousel div above the col containing the
                    text for left alignment of images
                  </p>
                  <br></br>
                  <a href="#" class="mt-auto btn btn-primary  ">
                    Read More
                  </a>
                </div>
              </div>
              <div class="col-md-5">
                <img style={{ width: "100%" }} src={update2} alt="" />
              </div>
            </div>
          </div>
          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-3">
                <div style={{minHeight:"300px"}}  class="card-block px-6">
                  <h4 class="card-title">
                    Horizontal Card with Carousel - Bootstrap 4{" "}
                  </h4>
                  <p class="card-text">
                    The Carousel code can be replaced with an img src, no
                    problem. The added CSS brings shadow to the card and some
                    adjustments to the prev/next buttons and the indicators is
                    rounded now. As in Bootstrap 3
                  </p>
                  <p class="card-text">
                    Made for usage, commonly searched for. Fork, like and use
                    it. Just move the carousel div above the col containing the
                    text for left alignment of images
                  </p>
                  <br></br>
                  <a href="#" class="mt-auto btn btn-primary  ">
                    Read More
                  </a>
                </div>
              </div>

              <div class="col-md-5">
                <img style={{ width: "100%" }} src={update3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
