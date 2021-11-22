import React, { Component } from "react";
import "./Statics.css";

export default class Statics extends Component {
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: "#d2d9d4", padding: "" }}
          class="container"
        >
          <div class="title h1 text-center">
            <h1>Statics</h1>
          </div>
          <div class="row">
            <div style={{ padding: "25px" }} class="col-md-6">
              <div class=" bg-c-blue order-card">
                <div style={{ padding: "40px" }} class="card-block">
                  <div class="card-title">
                    {" "}
                    <h3 style={{ fontWeight: "bold" }}> BOOKS DONATED </h3>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-info"
                      role="progressbar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <i class="fas fa-book fa-3x"></i>
                  <span class="f-right">
                    <h2>560</h2>
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: "25px" }} class="col-md-6 ">
              <div class=" bg-c-green order-card">
                <div style={{ padding: "40px" }} class="card-block">
                  <div class="card-title">
                    {" "}
                    <h3 style={{ fontWeight: "bold" }}>
                      {" "}
                      TREE SAPLINGS PLANTED{" "}
                    </h3>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <i class="fas fa-tree fa-3x"></i>
                  <span class="f-right">
                    <h2>1040</h2>
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: "25px" }} class="col-md-6">
              <div class=" bg-c-yellow order-card">
                <div style={{ padding: "40px" }} class="card-block">
                  <div class="card-title">
                    {" "}
                    <h3 style={{ fontWeight: "bold" }}> PLAM SEEDS PLANTED </h3>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar "
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <i class="fas fa-seedling fa-3x"></i>
                  <span class="f-right">
                    <h2>560</h2>
                  </span>
                </div>
              </div>
            </div>

            <div style={{ padding: "25px" }} class="col-md-6">
              <div class=" bg-c-pink order-card">
                <div style={{ padding: "40px" }} class="card-block">
                  <div class="card-title">
                    {" "}
                    <h3 style={{ fontWeight: "bold" }}>
                      {" "}
                      TREE SAPLINGS DONATED{" "}
                    </h3>
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "35%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <i class="fas fa-hand-holding fa-3x "></i>
                  <span class="f-right">
                    <h2>560</h2>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
