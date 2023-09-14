import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {createPopper} from "@popperjs/core";
import { couldStartTrivia } from "typescript";

const IndexDropdown = () => { // dropdown props
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
        <>
            <Link to="/board" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Dashboard
            </Link>
            <a className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="#pablo"
                ref={btnDropdownRef}
                onClick={
                    (e) => {
                        e.preventDefault();
                        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                    }
                }

            >
                Compare
            </a>
            <div ref={popoverDropdownRef}
                className={
                    (dropdownPopoverShow ? "block " : "hidden ") + "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
            }>
                <Link to="/board/platform" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                    Performance
                </Link>
                <Link to="/board/mps" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                    Positioning
                </Link>
                <Link to="/board/mps" className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
                    Changes
                </Link>
            </div>
            <Link to="/board/mps" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Due Diligence
            </Link>
            <Link to="/board" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Client Types
            </Link>
            <Link to="/board" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Custom Fees
            </Link>
            <Link to="/board" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Support
            </Link>
            <Link to="/board" className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                Account
            </Link>
        </>
    );
};

export default IndexDropdown;
