import React from "react";
export default function Header({tittle}){
    return (
        <div className="bg-gray-400  backdrop-blur-md shadow-lg  border-b border-gray-600">
            <div className="max-w-5xl mx-auto  px-4 sm:px-8 py-4 ">
                <h2 className="text-xl sm:text-2xl">{tittle}</h2>
            </div>
        </div>
    )
}