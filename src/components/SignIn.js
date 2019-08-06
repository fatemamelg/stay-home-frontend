import React, { Component } from 'react'
import './Backgroundproperty.css'

class SignIn extends Component {

    render() {
        return (

            <div>
                <section class="hero-wrap">
                    <div class="container">
                        <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-9 pb-4">
                            <h1 class="mb-3 bread">Log in to your account</h1>
                        </div>
                        </div>
                    </div>
                </section>

                    <h2>Sign in</h2>
                    <div class="col-md-12 tour-wrap">
                        <form>
                            <table class="table">
                                <tbody>
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
                                    <tr>
                                        <td>
                                            <button>Sign In</button>
                                        </td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </form>

                </div>

                <style>{"\
                    h2{\
                    text-align: left;\
                    }\
                "}</style>

            </div>
        )
    }
}
export default SignIn