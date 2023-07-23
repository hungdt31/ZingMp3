import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";
const {FaArrowLeftLong,FaArrowRightLong} = icons;
const Header = () => {
    return (
        <div className="flex justify-between w-full items-center">
            <div className="flex gap-6 w-full items-center">
                <div className="flex gap-6 text-gray-400">
                    <span><FaArrowLeftLong size={20}/></span>
                    <span><FaArrowRightLong size={20}/></span>
                </div>
                <div className=" text-gray-400 w-1/2">
                    <Search/>
                </div>
            </div>
            <div className=" text-gray-400">
                Login
            </div>
        </div>
    )
};

export default Header;
