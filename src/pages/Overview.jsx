import React from "react";
import Header from "../components/common/Header";
import Statebaar from "../components/common/Statebaar";
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
} from "chart.js";

import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import SalesOverView from "../components/Overview/SalesOverView";
import SalesChannel from "../components/Overview/SalesChannel";
import CategoryDistribution from "../components/Overview/CategoryDistribution";
// import { AlertTriangleIcon } from "lucide-react";
Chart.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
);
// Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
export default function Overview() {
    return (
        <div className="w-full h-full">
            {/* top header */}
            <Header tittle={"Overview"} />
            <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 ">

                <div className="  grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    <Statebaar text={"Total Sales"} icon={AlertTriangle} value={"$12,345"} color={'#6366F1'} />
                    <Statebaar text={"Total Products"} icon={DollarSign} value={"$12,345"} color={'#6366F1'} />
                    <Statebaar text={"New User"} icon={Package} value={"$12,345"} color={'#6366F1'} />
                    <Statebaar text={"Conversion rate"} icon={TrendingUp} value={"$12,345"} color={'#6366F1'} />
                </div>



                <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 pt-4">
                    {/* chart 1 */}
                    <SalesOverView />
                    {/* chart 2 */}
                    <CategoryDistribution/>
                    {/* chart 3 */}
                    <div className="lg:col-span-2 md:col-span-1  ">
                        <SalesChannel/>
                    </div>
                </div>

            </div>
        </div>
    )
}