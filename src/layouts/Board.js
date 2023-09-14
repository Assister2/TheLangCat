import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import IndexNavbar from "components/Navbars/IndexNavbar";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Platform from "views/pages/Platform";
import Mps from "views/pages/Mps";
import Pricing from "views/pages/Pricing";
import Addnew from "views/pages/Addnew";
import MainBoard from "views/pages/Mainboard";

export default function Board() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          {/* <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          >
            
          </div> */}
          {/* <div className="container px-4 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full px-4 flex-1 max-w-full h-auto rounded border border-solid border-blueGray-100">
                <a className="invisilink " href="/board/mps">
                  <span className="text-lg block my-4 p-3 text-blueGray-700 text-center font-weight">Due Diligence Reports</span> 
                  <div  className="w-12/12 sm:w-12/12 px-4 h-100">
                    <img src="https://thelangcat.blob.core.windows.net/public/blog/6ab6239a-0345-4d40-a144-ac4d0b018615.png" alt="..." className="rounded max-w-full h-auto align-middle border-none" />
                  </div>
                </a>
              </div>
              <div className="w-full px-4 flex-1">
                <span className="text-4xl block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">Compare Performance</span>
              </div>
              <div className="w-full px-4 flex-1">
                <span className="text-4xl block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">See Latest industry changes</span>
              </div>
            </div>
            <div className="w-full px-4">
              <span className="text-4xl block my-4 p-3 text-blueGray-700 rounded 
              
              ">Featured Asset Manager of the Week:</span>
              <button className="bg-lightBlue-500 w-full text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                Advert Space
              </button>
            </div>
          </div> */}
          <Switch>
            <Route path="/board/mps" exact component={Mps} />
            <Route path="/board/platform" exact component={Platform} />
            <Route path="/board/pricing" exact component={Pricing} />
            <Route path="/board/mps/addnew" exact component={Addnew} />
            <Route path="/board" exact component={MainBoard} />
            <Redirect from="/board" to="/board" />
          </Switch>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
