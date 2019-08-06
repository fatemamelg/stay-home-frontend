import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Element from './Element'
import { IconContext } from 'react-icons'
import { FaMapMarkedAlt, FaChild, FaHome, FaMoneyBill } from 'react-icons/fa';

class Home extends Component {
    render() {
        return (
            <div>

                {/* <div class="container">
                    <h1 class="mb-5" >Get your way home
                    worldwide</h1>
                    <p class="mb-5">A small river named
                    Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div> */}

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/bg_2.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Get your way homeworldwide</h3>
                            <p>A small river named
                            Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/bg_4.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Buy &amp; Rent Modern Properties</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="images/bg_1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div class="" id="services-section">
                    <div class="container">
                        <div class="row justify-content-center ">
                            <div class="col-md-12">
                                <br />
                                <h2 class="mb-4">Our Services</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md">
                                <div>
                                    <IconContext.Provider value={{ className: "global-class-name", size: "3em" }}>
                                        <div class="icon justify-content-center align-items-center d-flex">
                                            <FaMapMarkedAlt />
                                        </div></IconContext.Provider>
                                    <div class="media-body">
                                        <h3 class="heading mb-3">Find Places Anywhere in the World</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex align-self-stretch">
                                <div class="media block-6 services text-center d-block mt-lg-5 pt-lg-4">
                                    <IconContext.Provider value={{ className: "global-class-name", size: "3em" }}>
                                        <div class="icon justify-content-center align-items-center d-flex">
                                            <FaChild />
                                        </div></IconContext.Provider>

                                    <div class="media-body">
                                        <h3 class="heading mb-3">We have agents</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex align-self-stretch">
                                <div class="media block-6 services text-center d-block">
                                    <IconContext.Provider value={{ className: "global-class-name", size: "3em" }}>
                                        <div class="icon justify-content-center align-items-center d-flex">
                                            <FaHome />
                                        </div></IconContext.Provider>
                                    <div class="media-body">
                                        <h3 class="heading mb-3">Buy &amp; Rent Modern Properties</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md d-flex align-self-stretch">
                                <div class="media block-6 services text-center d-block mt-lg-5 pt-lg-4">
                                    <IconContext.Provider value={{ className: "global-class-name", size: "3em" }}>
                                        <div class="icon justify-content-center align-items-center d-flex">
                                            <FaMoneyBill />
                                        </div></IconContext.Provider>
                                    <div class="media-body">
                                        <h3 class="heading mb-3">Making Money</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="row justify-content-center pb-5">
                        <div class="col-md-12 heading-section text-center">
                            <h2 class="mb-4">Our Property</h2>
                        </div>
                    </div>

                    <div class="row">
                        <Element class="item" />
                        <Element />
                        <Element />

                    </div>
                </div>

                <hr />
                <br />
                <div class="container" id="how-it-works">
                    <div class="row">
                        <div class="col-md-4 heading-section">
                            <h2 class="mb-4">How it works</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>

                            <div class="media block-6 services text-center d-block pt-md-5 mt-md-5">
                                <div class="icon justify-content-center align-items-center d-flex"><span>1</span></div>
                                <div class="media-body p-md-3">
                                    <h3 class="heading mb-3">Evaluate Your Property</h3>
                                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-self-stretch mt-lg-5">
                            <div class="media block-6 services text-center d-block mt-lg-5 pt-md-5 pt-lg-4">
                                <div class="icon justify-content-center align-items-center d-flex"><span>2</span></div>
                                <div class="media-body p-md-3">
                                    <h3 class="heading mb-3">Meet Your Agent</h3>
                                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 d-flex align-self-stretch">
                            <div class="media block-6 services text-center d-block">
                                <div class="icon justify-content-center align-items-center d-flex"><span>3</span></div>
                                <div class="media-body p-md-3">
                                    <h3 class="heading mb-3">Close the deal</h3>
                                    <p class="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at
                                the coast of the Semantics, a large language ocean.</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <style>{"\
                .homey{\
                    background-image: url('images/bg_2.jpg');\
                }\
                .ic{\
                    size: 100%;\
                }\
                .item{\
                    margin: 15px;\
                }\
                img{\
                    border-radius: 8px;\
                }\
            "}</style>
            </div>
        )
    }
}
export default Home