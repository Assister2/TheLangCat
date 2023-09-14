import React from "react";
import {Link} from "react-router-dom";

export default function DisplaySteps() {

    return (
        <main>
            <div className="container mx-auto">
                {/* <div class="mb-3 pt-0">
                    <input type="text" placeholder="Large Input" class="px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div> */}
                <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full text-center">Start</span>
                <div className="grid grid-rows-4 grid-flow-col bg-orange-500 my-4 gap-4 w-full rounded-full border text-center py-4">
                    <h1 text-align="center">1</h1>
                </div>
                <div className="grid grid-rows-4 grid-flow-col  my-4 gap-4 w-full rounded-full border text-center py-4">
                    <h1 text-align="center">2</h1>
                </div>
                <div className="grid grid-rows-4 grid-flow-col my-4 gap-4 w-full rounded-full border text-center py-4">
                    <h1 text-align="center">3</h1>
                </div>
                <div className="grid grid-rows-4 grid-flow-col my-4 gap-4 w-full rounded-full border text-center py-4">
                    <h1 text-align="center">4</h1>
                </div>
                <span className="text-lg block my-4 p-3 text-blueGray-700 rounded w-full text-center">Finish</span>
                
            </div>
        </main>
    )
}