import React from 'react'
import './admin.css'

// Import images
import bucknell from '../../../assets/img/bucknell-campus.jpg'

function Admin() {

    return (
        <div className='adminBody'>

            <div className='adminImage'>
                <img src={bucknell} alt="Bucknell University"/>
            </div>

            <div className='adminLoginForm'>
                <div className='adminText'>
                    <span className='adminTitle'>Admin Portal</span>
                </div>

                <div className='email'>
                    <label className="emailText" htmlFor="emailID">Email address</label><br/>
                    <input className="emailInput" id="emailID" type="email" placeholder='Enter a valid email address'/>
                </div>

                <div className='password'>
                    <label className="passwordText" htmlFor="passwordID>">Password</label><br/>
                    <input className="passwordInput" id="passwordID" type="password" placeholder='Enter your password'/>
                </div>

                <div className="recovery">
                    <input className="rememberMeInput" id="rememberMeID" type="checkbox" value=""/>
                    <label className="rememberMeText" htmlFor="rememberMeID">Remember me</label>
                    <a href="#!" className="forgetPassword">Forgot password?</a>
                </div>

                <div className="adminLogin">
                    <button className="loginButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Admin;