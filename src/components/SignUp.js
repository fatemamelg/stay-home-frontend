import React, { Component } from 'react'

class SignUp extends Component{
    render(){
 return(
        <section class="ftco-section ftco-services-2">
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
</section>
)
    }
}
export default SignUp