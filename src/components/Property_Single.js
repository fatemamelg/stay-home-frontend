import React, { Component } from 'react'
import './Background.css'
class PropertySingle extends Component{

    render(){
        return(
            <div>
             <section class="hero-wrap hero-wrap-2" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-9 pb-4">
            <h1 class="mb-3 bread">Property Details</h1>
             <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i class="ion-ios-arrow-forward"></i></a></span> <span>Properties Single <i class="ion-ios-arrow-forward"></i></span></p>
          </div>
        </div>
      </div>
    </section> 

     <section class="">
      <div class="container">
        <div class="row">
        	<div class="col-md-12 property-wrap mb-5">
    				<div class="row">
    					<div class="col-md-6 d-flex">
    						<div class="img align-self-stretch" ></div>
    					</div>
    					<div class="col-md-6 py-5">
    						<div class="text py-5 pl-md-5">
    							<div class="d-flex">
			    					<div>
				    					<h3><a href="properties-single.html">Fatima Subdivision</a></h3>
										</div>
										<div class="pl-md-4">
											<h4 class="price">$120,000</h4>
										</div>
									</div>
    							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
    						</div>
    					</div>
    				</div>
    			</div> 
    			<div class="col-md-12 tour-wrap">
    				<table class="table">
					    <tbody>
					      <tr>
				      	  <th scope="row">Lot area</th>
					        <td>
					        	<p>1,250 SQ FT</p>
					        </td>
					        <td></td>
					      </tr>

					      <tr>
				      	  <th scope="row">Floor Area</th>
					        <td>
					        	<p>1,300 SQ FT</p>
					        </td>
					        <td></td>
					      </tr>

					      <tr>
				      	  <th scope="row">Bedroom</th>
					        <td>
					        	<p>4 Bedrooms</p>
					        </td>
					        <td></td>
					      </tr>

					      <tr>
				      	  <th scope="row">Bathroom</th>
					        <td>
					        	<p>4 Bathrooms</p>
					        </td>
					        <td></td>
					      </tr>

					      <tr>
				      	  <th scope="row">Garage</th>
					        <td>
					        	<p>2 Garage</p>
					        </td>
					        <td></td>
					      </tr>


					      <tr>
				      	  <th scope="row">Included</th>
					        <td class="d-flex">
					        	<ul>
					        		<li>Year Built: 2019</li>
					        		<li>Roofing New</li>
					        	</ul>
					        	<ul>
					        		<li>Free Taxes</li>
					        		<li>Agent</li>
					        	</ul>
					        </td>
					        <td></td>
					      </tr>

					      <tr>
				      	  <th scope="row">Not Included</th>
					        <td class="d-flex">
					        	<ul>
					        		<li>Taxes</li>
					        	</ul>
					        	<ul>
					        		<li>Entry Fees</li>
					        	</ul>
					        </td>
					        <td></td>
                </tr>
                
					      {/* <tr>
				      	  <th scope="row">Take A Tour</th>
					        <td>
										
										 <div class="block-16">
				               <figure>
				                <div class="img" style="background-image: url(images/work-2.jpg);"></div>
				                <a href="https://vimeo.com/45830194" class="play-button popup-vimeo"><span class="icon-play"></span></a>
				              </figure> 
				            </div> 
					        </td>
					      </tr> */}
					    </tbody>
					  </table>
    			</div>
                <style>{"\
                    .hero-wrap hero-wrap-2{\
                    background-image: url('images/bg_3.jpg');\
                    }\
                    .img align-self-stretch{\
                        background-image: url(images/work-2.jpg);\
                    }\
                "}</style>
        </div>
       </div>
     </section> 
     </div>

        )
    }
}
export default PropertySingle