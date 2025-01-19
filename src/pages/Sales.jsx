import React from "react";
import Header from "../components/common/Header";
import Statebaar from "../components/common/Statebaar";
import SalesOverView from "../components/Overview/SalesOverView";
import CategoryDistribution from "../components/Overview/CategoryDistribution";
import { CircleDollarSign, Dock, ShoppingCart, TrendingUp } from "lucide-react";
export default function Sales() {
    return (
        <div className="w-full h-full ">
            {/* top header */}
            <Header tittle={"Sales"} />

            <div className=" max-w-4xl mx-auto px-4 py-6 space-y-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

                    <Statebaar text={"Total Revenue"} icon={CircleDollarSign} value={"$133,345"} color='#10B981' />
                    <Statebaar text={"Avg. Order Value"} icon={ShoppingCart} value={"$12,345"} color='#10B981' />
                    <Statebaar text={"Conversion Rate"} icon={TrendingUp} value={"3.45%"} color='#10B981' />
                    <Statebaar text={"Sales Growth"} icon={Dock} value={"12.7%"} color='#10B981' />
                </div>


                

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                    <SalesOverView/>
                    <CategoryDistribution/>
                </div>
            </div>

        </div>

    )
}