import React, { Component } from 'react'
import Element from './Element'
import './Backgroundproperty.css'

class Property extends Component {
  render() {
    return (
      <div>
        <section class="hero-wrap">
          <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-start">
              <div class="col-md-9 pb-4">
                <h1 class="mb-3 bread">Properties</h1>
              </div>
            </div>
          </div>
          <br />
        </section>

        <Element />
      </div>

    )
  }
}
export default Property