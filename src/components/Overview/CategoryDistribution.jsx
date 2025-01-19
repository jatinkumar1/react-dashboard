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
export default function CategoryDistribution() {
    return (
        <div className=" bg-gray-400 backdrop-blur-md overflow-hidden shadow-lg rounded-xl ">

            <p className="text-grey ml-6 mt-2 text-xl">Category Distribution</p>
            <div style={{ height: "250px" }} className="flex flex-col items-center">
                <Pie
                    data={{
                        labels: ['Clothing', 'Electronics', 'Sports&Outdoors', 'Home&Garden', 'Books'],
                        datasets: [{
                            label: '',
                            data: [22, 31, 13, 14, 19],
                            backgroundColor: [
                                "#6366F1",
                                "#22C55E",
                                "#FACC15",
                                "#EF4444",
                                "#3B82F6",
                            ],
                        }]
                    }}
                >

                </Pie>

            </div>

        </div>
    )
}