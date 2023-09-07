import React from 'react';
import './style.login-page.css';

function LoginPage() {
    const spanElements = [];
    for (let i = 0; i < 200; i++) {
        spanElements.push(<span key={i}></span>);
    }
    return (
        <section id='login-page'>
            {spanElements}
            <div className="signin">
                <div className="content">
                    <h2>Sign In</h2>
                    <div className="form">
                        <div className="inputBx">
                            <input type="text" required />
                            <i>Username</i>
                        </div>
                        <div className="inputBx">
                            <input type="password" required />
                            <i>Password</i>
                        </div>
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="#">Signup</a>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage