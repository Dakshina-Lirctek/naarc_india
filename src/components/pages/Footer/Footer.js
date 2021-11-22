import React, { Component } from "react";
import naarclogo_white from "../../images/naarclogo_white.png";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer
          class="page-footer"
          style={{ background: "black" }}
        >
          <div style={{paddingTop:"20px"}} class="container text-center text-md-left mt-5">
            <div class="row mt-3">
            <div style={{paddingBottom:"30px"}} class="container text-center">
            <div class="row">
              <div style={{color:"white",fontWeight:"bold"}} class="col-md-4">
                PLANT !
              </div>
              <div style={{color:"white",fontWeight:"bold"}}  class="col-md-4 ">
                EDUCATE !!
              </div>
              <div style={{color:"white",fontWeight:"bold"}}  class="col-md-4 ">
                SERVE !!!
              </div>
              </div>
              </div>

              <div style={{marginBottom:"%"}} class="col-md-3">
                <h6  class="text-uppercase font-weight-bold">Events</h6>
                <hr
                  class=""
                  style={{ width: "60px" }}
                />
                <div  class="Updated-links">
                <p>
                  <a style={{color:"white"}} href="#!">Tree Plantation</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">Plam Seed Plantation</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">Saplings Donation</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">Registration</a>
                </p>
                </div>
              </div>

              <div style={{}} class="col-md-3 ">
                <h6 class="text-uppercase font-weight-bold">Navbar links</h6>
                <hr
                  class=""
                  style={{ width: "60px" }}
                />
                <p>
                  <a style={{color:"white"}} href="#!">About</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">Gallery</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">DonateUs</a>
                </p>
                <p>
                  <a style={{color:"white"}} href="#!">JoinUs</a>
                </p>
                
              </div>

              <div style={{minHeight:"208px"}} class="col-md-3">
                <h6 class="text-uppercase font-weight-bold">Contact</h6>
                <hr
                  class=""
                  style={{ width: "60px" }}
                />
                <address style={{color:"white",lineHeight:"28px"}}>
                  46A/10, Appan Kadu,<br></br>
                  South Colony, B.Komarapalayam,<br></br>
                  Namakkal - 638 183, TamilNadu. <br></br>
                  Phone : +91 93428 03870
                </address>
              </div>
              <div class="col-md-3">
              <img
                  src={naarclogo_white}
                  style={{ width: "100%",paddingTop:""}}
                  class="img"
                  alt="Responsive"
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom:"20px"}}>
            <div class="container">
              <div class="row ">
                <div class="col-md-12  text-center">
                  <h6
                    style={{ color:"white", fontSize: "20px", fontWeight: "bold" }}
                    class="mb-0"
                  >
                    Get connected with us on social networks!
                  </h6>
                </div>
                <hr
                  class=""
                  style={{ width: "60px" }}
                />

                <div class="col-md-12 text-center ">
                  <a style={{color:"#10db02"}} class="fb-ic" href="https://www.facebook.com/profile.php?id=100070007106153" rel="no noreferrer" target="_blank">
                    <i class="fab fa-facebook-f fa-2x white-text mr-4"> </i>
                  </a>

                  <a style={{color:"#10db02"}} class="tw-ic" href="https://twitter.com/NaarcIndia?s=08" target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter fa-2x white-text mr-4"> </i>
                  </a>
                  
                  <a style={{color:"#10db02"}} class="ins-ic" href="https://www.instagram.com/naarc_india/" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram fa-2x white-text"> </i>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ color: "white", background: "black" }}
            class="footer-copyright text-center py-2"
          >
            © 2021 Copyright :
            <a style={{color:"#10db02",paddingLeft:"4px"}} href="https://naarctrustindia.netlify.app/" target="_blank" rel="noreferrer">
              {" "}
              www.naarctrustindia.com
            </a>
          </div>
          
        </footer>
      </div>
    );
  }
}
