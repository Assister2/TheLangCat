/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import Landing from "./Landing";
import Mps from './pages/mps'
import Platform from './pages/platform'

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Board() {
    return (
        <>
            <IndexNavbar fixed/>
            <main>
                <section className="relative w-full h-full py-40 min-h-screen">
                    <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
                        style={
                            {
                                backgroundImage: "url(" + require("assets/img/register_bg_2.png").default + ")"
                            }
                    }></div>
                    <Switch>
                        <Route path="/main/login" exact
                            component={Login}/>
                        <Route path="/main/register" exact
                            component={Register}/>
                        <Redirect from="/main" to="/main/login"/>
                    </Switch>
                    {/* <FooterSmall absolute /> */} </section>
            </main>
        </>
    );
}
