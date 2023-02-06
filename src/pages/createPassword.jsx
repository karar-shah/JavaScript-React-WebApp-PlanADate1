import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/";
import logo from "../assets/images/Logo.png";
import groupLogo from "../assets/images/Group 1153.png";
// import CyanButton from "../components/cyanButton";
// import WhiteButton from "../components/whiteButton";
import { CyanButton, WhiteButton } from "../components";

export const CreatePassword = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="images">
                    <img className="main-logo-createpass" src={logo} alt="main logo" />
                    <img
                        className="group-logo-createpass"
                        src={groupLogo}
                        alt="group-logo"
                    />
                </div>
                <form className="main-form-createpass">
                    <h1 className="form-heading">Secure Your Account.</h1>
                    <h6 className="form-subheading">
                        Enter and confirm a password for your account.
                    </h6>
                    <div className="input-box">
                        <label className="label-password" htmlFor="email">
                            Password
                        </label>
                        <Input type="password" name="email" placeholder="" />

                        <label
                            className="label-password-confirm"
                            htmlFor="password"
                        >
                            Confirm Password
                        </label>
                        <Input
                            className="pass-input"
                            type="password"
                            name="password"
                            placeholder=""
                        />
                    </div>
                    <CyanButton
                        text={"Next(1/3)"}
                        classname ="create-pass-butt"
                    />
                </form>
            </div>
        </div>
    );
};
