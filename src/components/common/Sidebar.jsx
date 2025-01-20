import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart, CircleUserRound, Home, Settings, ShoppingCart, Users, } from "lucide-react";
const Sidebaritem = ({ to, icon, text, active, close }) => {
    return (
        <li className={`pl-1 py-2 pr-2 rounded-md flex items-center gap-3 transition-colors cursor-pointer 
                        ${active ? "bg-pink-400 text-white" : "hover:bg-pink-600 text-gray-200"}`}>
            <Link to={to} className="flex items-center gap-3 ">
                <div className="relative group">

                {icon}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity lg:hidden md:hidden">
                    {text}
                </div>
                </div>



                <span className={`overflow-hidden transition-all duration-300 hidden lg:block md:block`}>


                    {text}
                </span>
            </Link>

        </li >
    )
}
export default function Sidebar() {
    const [close, setClose] = useState(false)
    const location = useLocation();
    const items = [
        { to: "/", icon: <Home />, text: "Overview" },
        { to: "/products", icon: <ShoppingCart />, text: "Products" },
        { to: "/users", icon: <Users />, text: "Users" },
        { to: "/sales", icon: <BarChart />, text: "Sales" },
        { to: "/orders", icon: <ShoppingCart />, text: "Orders" },
        { to: "/analytics", icon: <BarChart />, text: "Analytics" },
        { to: "/setting", icon: <Settings />, text: "Settings" },
    ];

    return (
        <aside className={`w-16 lg:w-64 md:w-64 transition-width duration-200`}>
            
            <nav className='sticky top-0 h-screen flex flex-col border-r shadow-sm bg-gray-400'>
                <div className=" lg:p-4 sm:p-2 p-2 flex justify-between items-center">
                    <h2 className={`text-lg font-bold hidden lg:block md:block`}>DASGBOARD</h2>
                    <button className="p-1 rounded-lg bg-slate-500 text-white hover:bg-slate-300 hover:text-black ml-1 lg:ml-0 md:ml-0"  >
                        {/* {close ? "open" : "close"} */}
                        <CircleUserRound size={28}/>
                    </button>
                </div>
                <ul className="flex-1  text-xl p-4">
                    {items.map(({ to, icon, text }) =>
                        <Sidebaritem
                            key={to}
                            to={to}
                            icon={icon}
                            text={text}
                            active={location.pathname === to}
                            close={close}
                        />
                    )}

                </ul>
            </nav>
        </aside>
    )
}