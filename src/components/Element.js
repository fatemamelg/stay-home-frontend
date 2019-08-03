import React, { Component } from 'react'

class Element extends Component {
    render() {
        return (
            <div className="item">
                <div class="img">
                    <img src="images/work-1.jpg" class="img-fluid"/>
                </div>
                <div class="desc">
                    <div
                        class="text bg-primary d-flex text-center align-items-center justify-content-center">
                        <span>Sale</span>
                    </div>
                    <div class="d-flex pt-5">
                        <div>
                            <h3><a href="properties.html">Fatima Subdivision</a></h3>
                        </div>
                        <div class="pl-md-4">
                            <h4 class="price">$120,000</h4>
                        </div>
                    </div>
                    <p class="h-info"><span class="location">New York</span> <span
                            class="details">&mdash; 3bds, 2bath</span></p>
                </div>

                <style>{"\
                    .item{\
                        width: 350px;\
                    }\
                    h3{\
                        text-align: left;\
                    }\
                "}</style>


            </div>
        )
    }
}

export default Element;