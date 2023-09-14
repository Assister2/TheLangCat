import React from "react";
import {Link} from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import CardTable from "components/Cards/CardTable";

export default function Mps() {
    const names1=["Test1", "Test2", "Test3", "Test4"];
    const names2=["Test5", "Test6", "Test7", "Test8"];
    const dates1=["13/9/2023","13/9/2023","13/9/2023","13/9/2023"];
    const dates2=["13/9/2022","13/9/2022","13/9/2022","13/9/2022"];
    const inProgressTableRowData = [
        {
          names: "Test1",
          dates: "13/9/2023",
        },
        {
          names: "Test2",
          dates: "13/9/2023",
        },
    ];
    const completedTableRowData = [
        {
          names: "Test3",
          dates: "12/9/2023",
        },
        {
          names: "Test4",
          dates: "12/9/2023",
        },
    ];
    return (
        <main>
            {/* <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"></div> */}
            {/* <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={
                    {backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"}
            }> */}
                {/* <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span> */}
            {/* </div> */}
             <div className="container px-4 mx-auto">
                <div className="w-full px-4">
                    <span className="text-4xl block my-4 p-3 text-blueGray-700 rounded">
                        Model Portfolio Service Provider Due Diligence:
                    </span>
                    <span className="text-2xl block my-0 p-1 text-blueGray-700 rounded">
                        Allows you to quickly shortlist and select the providers that best meet your client types.
                    </span>
                    <span className="text-2xl block my-0 p-1 text-blueGray-700 rounded">
                        The service automatically generates a detailed due diligence report based on your selections.
                    </span>
                </div>
                <div className="w-full px-4 py-4 flex justify-center items-center">
                    <button className="bg-lightBlue-500 w-2/12 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-6 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Create new report
                    </button>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-4 flex-1">
                        <div className="w-full px-4 py-6">
                            <CardTable color={"light"} headerTitle={"In progress reports:"} data={inProgressTableRowData}></CardTable>
                        </div>
                        <div className="w-full px-4 py-6">
                            <CardTable color={"light"} headerTitle={"Completed reports:"} data={completedTableRowData}></CardTable>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
