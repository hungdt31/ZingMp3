import React from 'react'
import logo from '../assets/logo-dark.svg'
import { NavLink } from 'react-router-dom'
import { SidebarMenu } from '../ultis/menu'
const notActiveStyle = "py-[12px] px-[25px] font-semibold flex items-center gap-3 text-menuText"
const ActiveStyle = "py-[12px] px-[25px] font-semibold flex items-center gap-3 text-white"
const SidebarLeft = () => {
  return (
    <div className='flex flex-col bg-mycolor text-white'>
        <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
            <img src={logo} alt="logo" className='w-[120px] object-contain'/>
        </div>
        <div className='flex flex-col'>
            {
                SidebarMenu.map(item =>(
                    <NavLink
                        to={item.path}
                        key ={item.path}
                        end={item.end}
                        className={({isActive}) => isActive ? ActiveStyle : notActiveStyle}
                    >
                        {item.icons}
                        <span
                        >{item.text}</span>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default SidebarLeft