import React from "react";
import { Outlet } from "react-router";
function Public() {
    return (  
        <div>
            Public
            <Outlet/>
        </div>
    );
}

export default Public;