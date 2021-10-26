import React, { Component } from "react";
import "./Update.css";
import update1 from "../../images/update1.JPG";
import update2 from "../../images/update2.jpg";
import update3 from "../../images/update3.jpg";

export default class Update extends Component {
  render() {
    return (
      <div style={{ marginTop: "5%" }}>
        <div style={{ paddingTop: "20px" }} class="container">
          <div class="title h1 text-center">Latest Events</div>
          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-4">
                <div
                  style={{ minHeight: "300px", paddingTop: "50px" }}
                  class="card-block px-6"
                >
                  <h3 style={{fontWeight:"bolder"}} class="card-title">
                    Inaguration Day - Tree Plantation in Public Park{" "}
                  </h3>
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
                  <a
                    style={{ backgroundColor: "#66fcf1" }}
                    href="#"
                    class="mt-auto btn  "
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div class="col-md-5">
                <img
                  src={update1}
                  style={{ width: "100%", marginTop: "60px" }}
                  class="img-fluid"
                  alt="Responsive"
                />
              </div>
            </div>
          </div>

          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-4">
                <div
                  style={{ minHeight: "250px", paddingTop: "50px" }}
                  class="card-block px-6"
                >
                  <h4 class="card-title">
                    Independance Day - Tree Plantation in Society Bank{" "}
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
                  <a
                    style={{ backgroundColor: "#66fcf1" }}
                    href="#"
                    class="mt-auto btn  "
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div class="col-md-5">
                <img
                  src={update2}
                  style={{ width: "100%", marginTop: "20px" }}
                  class="img-fluid"
                  alt="Responsive"
                />
              </div>
            </div>
          </div>

          <div style={{ minHeight: "300px" }} class="card">
            <div class="row ">
              <div class="col-md-7 px-4">
                <div
                  style={{ minHeight: "250px", paddingTop: "50px" }}
                  class="card-block px-6"
                >
                  <h4 class="card-title">
                    Plam Seed Festival - {" "}
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
                  <a
                    style={{ backgroundColor: "#66fcf1" }}
                    href="#"
                    class="mt-auto btn  "
                  >
                    Read More
                  </a>
                </div>
              </div>

              <div class="col-md-5">
                <img
                  src={update3}
                  style={{ width: "100%", marginTop: "20px" }}
                  class="img-fluid"
                  alt="Responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
