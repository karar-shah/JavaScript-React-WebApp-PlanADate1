import React from "react";
import { Route, Routes as Router } from "react-router-dom";
import { Navigations } from "../config/navigation";
// import Login from "../pages/login"
import { Login, Register, CreatePassword } from "../pages";

export default function Routes() {
    return (
        <Router>
            <Route path={Navigations.LOGIN} element={<Login />} />
            <Route path={Navigations.REGISTER} element={<Register />} />
            <Route path={Navigations.CREATEPASSWORD} element={<CreatePassword />} />
        </Router>
    );
}
