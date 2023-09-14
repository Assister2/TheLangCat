import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import IndexNavbar from "components/Navbars/IndexNavbar";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Platform from "views/pages/Platform";
import Mps from "views/pages/Mps";

export default function Auth() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/board/platform" exact component={Platform} />
            <Route path="/board/mps" exact component={Mps} />
            <Redirect from="/board" to="/board/platform" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
