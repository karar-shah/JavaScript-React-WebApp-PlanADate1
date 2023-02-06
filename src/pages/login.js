import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/";
import logo from "../assets/images/Logo.png";
import groupLogo from "../assets/images/Group 1153.png";
// import CyanButton from "../components/cyanButton";
// import WhiteButton from "../components/whiteButton";
import { CyanButton, WhiteButton } from "../components";

export const Login = () => {
    return (
        <div className="wrapper">
            <div className="container">
                {/* <Input type="text" name="email" placeholder="email" /> */}
                <div className="images">
                    <img className="main-logo" src={logo} alt="main logo" />
                    <img
                        className="group-logo"
                        src={groupLogo}
                        alt="group-logo"
                    />
                </div>

                <form className="main-form">
                    <h1 className="form-heading">Login To Your Account</h1>
                    <h6 className="form-subheading">
                        Please enter your login details.
                    </h6>
                    <div className="input-box">
                        <label className="label-email" htmlFor="email">
                            Email
                        </label>
                        <Input type="text" name="email" placeholder="" />

                        <label className="label-password" htmlFor="password">
                            Password
                        </label>
                        <Input
                            className="pass-input"
                            type="password"
                            name="password"
                            placeholder=""
                        />
                    </div>
                    <div className="remember-container">
                        <div className="remember-form">
                            <input
                                className="check-tick"
                                type="checkbox"
                                name="remember"
                                value="remember"
                            />
                            <label
                                className="label-remember"
                                htmlFor="remember"
                            >
                                Remember Me
                            </label>
                        </div>
                        <a
                            className="link-forgetpass"
                            href="javascript:void(0)"
                        >
                            Forget Password?
                        </a>
                    </div>
                    <CyanButton text={"Login"} />
                    <hr className="horizontal-line" />
                    <a className="link-noaccount" href="javascript:void(0)">
                        Don't have an account?
                    </a>
                    <Link to="/register">
                        <WhiteButton text={"Register"} />
                    </Link>
                </form>
            </div>
        </div>
    );
};
