import React, { Component } from "react";
import "./home.css";
import Slider from "../Slider/Slider";
import Card_Trees from "../../images/Card_Trees.jpg";
import Card_Education from "../../images/Card_Education.jpg";
import Card_Serve from "../../images/Card_Serve.jpg";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-image">
          <Slider />
        </div>
        <div>
          <section class="wrapper">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="card text-white card-has-bg click-col"
                    style={{
                      background: `url(${Card_Trees})`,
                      backgroundSize: "px",
                    }}
                  >
                    <div class="card-img-overlay d-flex flex-column">
                      <div class="card-body">
                        <h1 class="card-title mt-0 ">Plant</h1>
                        <small class="card-meta mb-2">Together_We_Can</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div
                    class="card text-white card-has-bg click-col"
                    style={{
                      background: `url(${Card_Education})`,
                      backgroundSize: "px",
                    }}
                  >
                    <div class="card-img-overlay d-flex flex-column">
                      <div class="card-body">
                        <h1 class="card-title mt-0 ">Educate</h1>
                        <small class="card-meta mb-2">Together_We_Can</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    class="card text-white card-has-bg click-col"
                    style={{
                      background: `url(${Card_Serve})`,
                      backgroundSize: "px",
                    }}
                  >
                    <div class="card-img-overlay d-flex flex-column">
                      <div class="card-body">
                        <h1 class="card-title mt-0 ">Serve</h1>
                        <small class="card-meta mb-2">Together_We_Can</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
