import React, { Component } from 'react'
import './Backgroundproperty.css'

class SignUp extends Component {
    render() {
        return (
            <div>
                <section class="hero-wrap">
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-9 pb-4">
                            <h1 class="mb-3 bread">Create new account</h1>
                        </div>
                        </div>
                    </div>

                </section>
                <br />
                <div class="container">
                    <div class="row">
                        <h2>Sign up</h2>
                        <div class="col-md-12 tour-wrap">
                            <form>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">First Name</th>
                                            <td>
                                                <input type="text" name="fname" />
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Last Name</th>
                                            <td>
                                                <input type="text" name="lname" />
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>
                                                <input type="email" name="email" />
                                            </td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Password</th>
                                            <td>
                                                <input type="password" name="pass" />
                                            </td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default SignUp