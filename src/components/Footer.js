import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer class="ftco-footer ftco-section row mb-5" id="footer">
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Stayhome</h2>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                        <ul class="ftco-footer-social list-unstyled mt-5">
                            <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4 ml-md-4">
                        <h2 class="ftco-heading-2">Links</h2>
                        <ul class="list-unstyled">
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Search Properties</a></li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Our Services</a></li>
                            <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>How it works</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Have a Questions?</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain
                                        View, San Francisco, California, USA</span></li>
                                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929
                                            210</span></a></li>
                                <li><a href="#"><span class="icon icon-envelope pr-4"></span><span
                                    class="text">info@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
