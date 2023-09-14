import React from "react";
import {Link} from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Pricing() {
    return (
        <main>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div className="mt-5 container">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 flex-1 max-w-full h-auto ">
                                <a className="invisilink " href="/board/mps">
                                <span className="text-4xl block my-4 p-3 text-blueGray-700 text-center font-weight">Due Diligence Reports</span> 
                                <div  className="w-12/12 sm:w-12/12 px-4 h-100">
                                    <img src="https://thelangcat.blob.core.windows.net/public/blog/6ab6239a-0345-4d40-a144-ac4d0b018615.png" alt="..." className="rounded max-w-full h-auto align-middle border-none" />
                                </div>
                                </a>
                            </div>
                            <div className="w-full px-4 flex-1 max-w-full h-auto ">
                                <a className="invisilink " href="/board/mps">
                                    <span className="text-4xl block my-4 p-3 text-blueGray-700 text-center font-weight">Compare Performance</span>
                                    <div  className="w-12/12 sm:w-12/12 px-4 h-100">
                                        <img src="https://thelangcat.blob.core.windows.net/public/blog/2e7c4b97-e528-47e5-9bb7-05a86bd7e8db.png" alt="..." className="rounded max-w-full h-auto align-middle border-none" />
                                    </div>
                                </a>
                            </div>
                            <div className="w-full px-4 flex-1 max-w-full h-auto ">
                                <a className="invisilink " href="/board/mps">
                                    <span className="text-4xl block my-4 p-3 text-blueGray-700  text-center font-weight">See Latest changes</span>
                                    <div  className="w-12/12 sm:w-12/12 px-4 h-100">
                                        <img src="https://thelangcat.blob.core.windows.net/public/blog/6a94e994-d3df-498b-b957-8f1d4ae07022.png" alt="..." className="rounded max-w-full h-auto align-middle border-none" />
                                    </div>
                                </a>
                            </div>
                            </div>
                            <div className="w-full px-4">
                                <span className="text-4xl block my-4 p-3 text-blueGray-700 rounded 
                                
                                ">Featured Asset Manager of the Week:</span>
                                <button className="bg-lightBlue-500 w-full text-white active:bg-lightBlue-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    Advert Space
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
// rounded border border-solid border-blueGray-100