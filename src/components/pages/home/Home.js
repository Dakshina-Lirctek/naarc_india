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
                      <div class="card-body" style={{height:"300px"}}>
                        <h1 class="card-title" style={{fontWeight:"bold" , fontSize:"15px"}}>Plant</h1>
                        <p  >
                        <q>Earth is our mother, What happens to that mother will happen to us, her children, tomorrow. Because the earth does not belong to man, man belongs to the earth </q>
                        </p>
                        <cite>- Nammalvar</cite>
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
                        <h1 class="card-title" style={{fontWeight:"bold" , fontSize:"15px"}}>Educate</h1> 
                        <p >
                        <q>Education is the most powerful weapon Which you can use to change the world </q>
                        </p>
                        <cite> -Dr.A.P.J. Abdul Kalam</cite>
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
                        <h1 class="card-title " style={{fontWeight:"bold" , fontSize:"15px"}}>Serve</h1>
                        <p >
                        <q> I hope that people will finally come to realize that there is only one race 
                           - <cite> `The human race` </cite> - and that we are all member of it</q>
                        </p>
                        <cite> -Margaret Atwood</cite>
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
