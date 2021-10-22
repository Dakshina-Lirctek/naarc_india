import React, { Component } from 'react';
import NAARC_Logo from "../../images/NAARC_Logo.jpg";

export default class Footer extends Component {
    render() {
        return (
            <div>
              
<footer class="page-footer font-small unique-color-dark" style={{background: "white"}}>

  <div style={{backgroundColor:""}}>
    <div class="container">

     
      <div class="row py-4 d-flex align-items-center">

        
        <div  class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 style={{fontSize:"20px" , fontWeight:"bold"}} class="mb-0">Get connected with us on social networks!</h6>
        </div>
        
        <div class="col-md-6 col-lg-7 text-center text-md-right">

          
          <a  class="fb-ic" href="" target="_blank">
            <i class="fab fa-facebook-f white-text mr-4"> </i>
          </a>
         
          <a class="tw-ic"  href="" target="_blank">
            <i class="fab fa-twitter white-text mr-4"> </i>
          </a>
         
          <a class="gplus-ic"  href="" target="_blank">
            <i class="fab fa-google-plus-g white-text mr-4"> </i>
          </a>
        
          <a class="li-ic"  href="" target="_blank">
            <i class="fab fa-linkedin-in white-text mr-4"> </i>
          </a>
          
          <a class="ins-ic"  href="" target="_blank">
            <i class="fab fa-instagram white-text"> </i>
          </a>

        </div>
       

      </div>
     

    </div>
  </div>


  <div class="container text-center text-md-left mt-5" >

  
    <div class="row mt-3">

     
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        
        <img style={{width:"200px"}} src={NAARC_Logo} alt="Naarc_logo"></img>

      </div>
     

     
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

      
        <h6 class="text-uppercase font-weight-bold">Products</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">MDBootstrap</a>
        </p>
        <p>
          <a href="#!">MDWordPress</a>
        </p>
        <p>
          <a href="#!">BrandFlow</a>
        </p>
        <p>
          <a href="#!">Bootstrap Angular</a>
        </p>

      </div>
    

     
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

       
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <a href="#!">Your Account</a>
        </p>
        <p>
          <a href="#!">Become an Affiliate</a>
        </p>
        <p>
          <a href="#!">Shipping Rates</a>
        </p>
        <p>
          <a href="#!">Help</a>
        </p>

      </div>
      

   
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
        <p>
          <i class="fas fa-home mr-8"></i> Komarapalayam, TN, India</p>
        <p>
          <i class="fas fa-envelope mr-8"></i> info.naarctrust@gmail.com</p>
        <p>
          <i class="fas fa-phone mr-8"></i> + 01 234 567 88</p>
        <p>
          <i class="fas fa-print mr-6"></i> + 01 234 567 89</p>

      </div>
      

    </div>
    

  </div>
  

 
  <div style={{color:"white" ,background: "#2e3440"}} class="footer-copyright text-center py-2">© 2020 Copyright:
    <a href="#" target="_blank"> www.NAARCindia.com</a>
  </div>
 

</footer>

            </div>
        )
    }
}
