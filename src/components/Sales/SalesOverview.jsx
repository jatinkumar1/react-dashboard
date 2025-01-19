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

import { Bar,PolarArea Doughnut, Line, Pie } from "react-chartjs-2";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
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
export default function SalesOverview(){
    return(
        <div className=" bg-gray-400 backdrop-blur-md overflow-hidden shadow-lg rounded-xl ">

            <p className="text-grey ml-6 mt-2 text-xl">Sales Overview</p>
            <div style={{ height: "250px" }} className="flex flex-col items-center">
                <PolarArea
                data={{
                    labels:{
                        
                    }
                    }}
                >

                </PolarArea>
            </div>

        </div>
    )
}