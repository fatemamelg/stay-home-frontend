import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className="homey">

                <div class="container">
                <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Get your way home
                    worldwide</h1>
                <p class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">A small river named
                    Duden flows by their place and supplies it with the necessary regelialia.</p>
                <form action="#" class="search-location">
                    <div class="row">
                        <div class="col-lg align-items-end">
                            <div class="form-group">
                                <div class="form-field">
                                    <input type="text" class="form-control" placeholder="Search location" />
                                    <button><span class="ion-ios-search"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                </div>



                <style>{"\
                    .homey{\
                        background-image: url('images/bg_2.jpg');\
                    }\
                "}</style>
            </div>
        )
    }
}
export default Home