import React from "react";
import {Link} from "react-router-dom";
import { createPopper } from '@popperjs/core';

export default function Starts() {

    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {placement: "bottom-start"});
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    return (
        <main>
            <div className="container mx-auto">
                {/* <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full">Company Level requirements</span>
                
                <div className="w-full"><span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">3rd party fincial strenth:</span>
                </div>
                <div className="w-full"><span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">Minmum track record:</span>
                </div>
                <div className="w-full"><span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">Assets under management:</span>
                </div> */}
                {/* <div className="w-full">
                    <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">3rd party fincial strenth:</span>
                </div> */}
                <div className="w-full">
                    <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">Report Name:</span>
                    <input type="text" placeholder="Input Text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>
                <div className="w-full">
                    <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">Target Client Type:</span>
                    <input type="text" placeholder="Input Text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>
                <div className="w-full">
                    <span className="text-lg block my-4 p-3 text-blueGray-700 rounded b w-full ">Introduction Comments:</span>
                    <input type="text" placeholder="Input Text" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>
                <div className="w-full my-4">
                    <button
                        className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 ease-linear transition-all duration-150"
                        type="button"
                        ref={btnDropdownRef}
                        onClick={() => {
                            dropdownPopoverShow
                            ? closeDropdownPopover()
                            : openDropdownPopover();
                        }}
                        >
                        Dropdown of previous reports
                    </button>
                </div>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-lightBlue-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                    }>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                        onClick={e => e.preventDefault()}
                    >
                        A
                    </a>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                        onClick={e => e.preventDefault()}
                    >
                        B
                    </a>
                    <a
                        href="#pablo"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                        onClick={e => e.preventDefault()}
                    >
                        C
                    </a>
                </div>
                
            </div>
        </main>
    )
}