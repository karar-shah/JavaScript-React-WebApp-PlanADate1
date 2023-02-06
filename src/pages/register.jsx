import React from "react";
import { Link } from "react-router-dom";
import { images } from "../config";
import { Input, Label } from "../components";
import { CyanButton, WhiteButton } from "../components";

export const Register = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="logo-holder">
                    <img src={images.logo} alt="logo" className="img-fluid" />
                </div>
                <form className="auth-form">
                    <h1>Create An Account</h1>
                    <p>Please enter below details to get registered.</p>

                    <div className="split-inputs">
                        <div className="reg-first">
                            <Label
                                classname="reg-firstname"
                                htmlfor="first-name"
                                text="First Name"
                            />
                            <Input
                                type="text"
                                name="first-name"
                                classname="first-name-input"
                            />
                        </div>
                        <div className="reg-last">
                            <Label
                                classname="reg-lastname"
                                htmlfor="last-name"
                                text=" Last Name"
                            />
                            <Input
                                type="text"
                                name="last-name"
                                classname="last-name-input"
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <Label
                            classname="dob"
                            htmlfor="dob"
                            text="Date of Birth"
                        />
                        <Input type="date" name="dob" />
                        <Label
                            classname="reg-email"
                            htmlfor="email"
                            text="Email"
                        />
                        <Input type="email" name="email" />
                        <Label
                            classname="reg-userName"
                            htmlfor="userName"
                            text="Username"
                        />
                        <Input type="text" name="userName" />
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
                                Accept{" "}
                                <a href="javascript:void(0)">
                                    <u>Terms & Conditions</u>
                                </a>
                            </label>
                        </div>
                    </div>
                    <Link to="/createpassword">
                        <CyanButton text={"Register"} />
                    </Link>
                    <hr />
                    <a className="link-haveaccount" href="javascript:void(0)">
                        Already have an account?
                    </a>
                    <Link to="/">
                        <WhiteButton text={"Login"} />
                    </Link>
                </form>
            </div>
        </div>
    );
};
