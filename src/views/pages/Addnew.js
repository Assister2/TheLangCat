import React from "react";
import {Link} from "react-router-dom";

import DisplaySteps from "../../components/Report/DisplaySteps";
import Starts from "../../components/Report/Starts";
import Step1 from "../../components/Report/Steps";
import Finish from "../../components/Report/Finish";

export default function Addnew() {
    return (
        <main>
            <div className="container px-4 mx-auto">
                <div className="flex justify-between mx-auto">
                    <div className="w-1/6 px-4">
                        
                        {/* <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">One of thee columns</span> */}
                        <DisplaySteps />
                    </div>
                    <div className="w-10/12 px-4">
                        <Starts />
                        {/* <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">One of three columns</span> */}
                    </div>
                </div>
            </div>
        </main>
    )
}