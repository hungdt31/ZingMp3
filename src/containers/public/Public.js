import React from "react";
import { Outlet } from "react-router";
import { SidebarLeft, SidebarRight } from "../../components";
function Public() {
    return (  
        <div className="w-full flex overflow-y-auto">
            <div className="w-[240px] flex-none ">
                <SidebarLeft/>
            </div>
            <div className="flex-auto border border-red-500">
                <Outlet/>
            </div>
            <div className="w-[329px] flex-none border border-blue-500">
                <SidebarRight/>
            </div>
        </div>
    );
}
// thuộc tính flex-none: width của thành phần sẽ được giữ nguyên khi cấu hình cha thay đổi
// thuộc tính overflow: khi vượt quá kích thước mặc định sẽ tự động tạo thanh cuộn

export default Public;