import React, { Component } from "react";
import "./Statics.css"
export default class Statics extends Component {
  render() {
    return (
      <div>
        <div class="grey-bg container-fluid">
          <section id="minimal-statistics">
            <div class="row">
              <div class="col-12 mt-3 mb-1">
                <h2 class="text-uppercase" style={{ fontWeight:"bold"}}>Minimal Statistics Cards</h2>
                <p style={{}}>Statistics on minimal cards.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6 col-sm-2 col-12" style={{paddingBottom:"40px",borderRadius:"20px"}}>
                <div class="">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h3 class="primary">278</h3>
                          <h1>Books Donated</h1>
                        </div>
                        <div class="align-self-center">
                          <i class="fas fa-book-open fa-4x primary"></i>
                        </div>
                      </div>
                      <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          style={{width: '80%'}}
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-sm-6 col-12" style={{paddingBottom:"40px"}}>
                <div class="">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h3 class="warning">1040</h3>
                          <h1>Trees Planted</h1>
                        </div>
                        <div class="align-self-center">
                          <i class="fas fa-tree fa-4x warning" ></i>
                        </div>
                      </div>
                      <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style={{width: '60%'}}
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-6 col-sm-6 col-12" style={{paddingBottom:"40px"}}>
                <div class="">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h3 class="success">510</h3>
                          <h1>Plam Seed Plantated</h1>
                        </div>
                        <div class="align-self-center">
                          <i class="fas fa-seedling fa-4x success"></i>
                        </div>
                        
                      </div>
                      <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style={{width: '60%'}}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-sm-6 col-12" style={{paddingBottom:"40px"}}>
                <div class="">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h3 class="danger">1000</h3>
                          <h1>Trees Given</h1>
                        </div>
                        <div class="align-self-center">
                        <i class="fas fa-hand-holding fa-4x danger" ></i>
                        </div>
                      </div>
                      <div class="progress mt-1 mb-0" style={{height: "10px"}}>
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{width: '40%'}}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
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
