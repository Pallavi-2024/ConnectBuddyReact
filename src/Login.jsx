import React, { useState } from "react";
import "../public/css/login.css";

const Login = () => {
    const [loginMethod, setLoginMethod] = useState("password");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login");
    }

    return (
        <div className="login-page">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="login-card">
                            <img src="/images/logo.png" alt="logo" className="login-logo" />
                            <h2>Login</h2>
                            <form onSubmit={handleLogin}>
                                <label>User Id</label>
                                <input type="email" placeholder="Enter Email Id" required />
                                <label>Password</label>
                                <div className="password-box">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Password"
                                        required
                                    />
                                    <span onClick={() => setShowPassword(!showPassword)}>
                                        👁
                                    </span>
                                </div>
                                <div className="options">
                                    <label>
                                        <input type="checkbox" className="checkbox" /> Remember Me
                                    </label>
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <button className="btn-login">Login</button>

                            </form>
                            <div className="divider">or signup with</div>
                            <div className="social-login">
                                <a href="#" className="facebook">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="25" cy="25" r="25" fill="#1877F2" />
                                        <path d="M30.7625 22H27.2375V20C27.2375 18.9681 27.3215 18.3181 28.8005 18.3181H30.6685V15.1381C29.7595 15.0441 28.8455 14.9981 27.9305 15.0001C25.2175 15.0001 23.2375 16.6571 23.2375 19.699V22H20.2375V26L23.2375 25.999V35H27.2375V25.997L30.3035 25.996L30.7625 22Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="#" className="linkedin">
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <circle cx="25" cy="25" r="25" fill="#0077B4" />
                                        <rect x="15" y="15" width="20" height="20" fill="url(#pattern0_1_1403)" />
                                        <defs>
                                            <pattern id="pattern0_1_1403" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1_1403" transform="scale(0.00195312)" />
                                            </pattern>
                                            <image id="image0_1_1403" width="512" height="512" preserveAspectRatio="none"
                                                xlinkHref="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                </a>
                                <a href="#" className="google">
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="25" cy="25" r="25" fill="#F2F2F2" />
                                        <g transform="translate(13,13)">
                                            <path
                                                fill="#4285F4"
                                                d="M23.49 12.27c0-.78-.07-1.53-.2-2.25H12v4.26h6.51a5.57 5.57 0 0 1-2.41 3.66v3.04h3.9c2.28-2.1 3.49-5.19 3.49-8.71z"
                                            />
                                            <path
                                                fill="#34A853"
                                                d="M12 24c3.15 0 5.8-1.04 7.73-2.82l-3.9-3.04c-1.08.72-2.46 1.15-3.83 1.15-2.94 0-5.43-1.98-6.32-4.64H1.63v2.92A12 12 0 0 0 12 24z"
                                            />
                                            <path
                                                fill="#FBBC05"
                                                d="M5.68 14.65A7.19 7.19 0 0 1 5.31 12c0-.92.17-1.8.37-2.65V6.43H1.63A11.99 11.99 0 0 0 0 12c0 1.93.46 3.76 1.63 5.57l4.05-2.92z"
                                            />
                                            <path
                                                fill="#EA4335"
                                                d="M12 4.73c1.71 0 3.24.59 4.45 1.74l3.32-3.32A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.63 6.43l4.05 2.92C6.57 6.7 9.06 4.73 12 4.73z"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <p className="register">
                                Not a member? <a href="/register">Register Now</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <img
                            src="/images/login_image.png"
                            alt="banner"
                            className="banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;