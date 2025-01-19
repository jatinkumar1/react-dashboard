import React from "react";
import Header from "../components/common/Header";
import Statebaar from "../components/common/Statebaar";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductTable from "../components/Products/ProductsTable";
import SalesOverView from "../components/Overview/SalesOverView";
import CategoryDistribution from "../components/Overview/CategoryDistribution";
export default function Orders() {
    return (
        <div className="w-full h-full">
            {/* top header */}
            <Header tittle={"Orders"} />
            <div className=" max-w-4xl mx-auto px-4 py-6 space-y-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

                    <Statebaar text={"Total Products"} icon={Package} value={"$12,345"} color='#10B981' />
                    <Statebaar text={"Top Selling"} icon={AlertTriangle} value={"$12,345"} color='#10B981' />
                    <Statebaar text={"Low Stock"} icon={TrendingUp} value={"$12,345"} color='#10B981' />
                    <Statebaar text={"Total Revenue"} icon={DollarSign} value={"$12,345"} color='#10B981' />
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                    <SalesOverView/>
                    <CategoryDistribution/>
                </div>
                <ProductTable/>
            </div>
        </div>
    )
}