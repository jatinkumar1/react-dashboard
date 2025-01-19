import React from "react";
export default function Statebaar({text,icon:Icon,value,color}) {
    return (
        <div className="flex">
            <div className="border-2 border-black pl-4 w-52 bg-gray-400 backdrop-blur-md overflow-hidden shadow-lg rounded-xl">
                <div>
                    <div className="flex text-center items-center pt-1">
                    {/* {/* <span> */}
                        <Icon size={18} className = 'mr-1' style = {{color}} />
                    {/* </span> */}
                    <h5 className="text-xs">
                        {text}
                    </h5>
                    </div>
                    <p className="text-lg pl-6">
                        {value}
                    </p>
                </div>

            </div>
        </div>
    )
}