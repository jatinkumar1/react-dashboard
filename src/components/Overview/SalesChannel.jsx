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
export default function SalesChannel(){
    return(
        <div className="bg-gray-400 backdrop-blur-md overflow-hidden shadow-lg rounded-xl">
                    <p className="text-grey ml-6 mt-2 text-xl">Sales By Channel</p>
                    <div style={{ height: "250px" }} className="h-full w-full flex flex-col items-center p-4">
                        <Bar
                            data={{
                                labels: ["Website", "Mobile App", "Marketplace", "Social Media"],
                                datasets: [{
        
                                    data: [45600, 38200, 29800, 18700],
                                    backgroundColor: [
                                        'rgba(75, 192, 192, 0.8)',  // Teal
                                        'rgba(54, 162, 235, 0.8)',  // Blue
                                        'rgba(153, 102, 255, 0.8)', // Purple
                                        'rgba(201, 203, 207, 0.8)'  // Gray
                                    ]
                                }]
                            }}
                            options={{
                                maintainAspectRatio: false
                            }}
                        >
                        </Bar>
        
                    </div>
                </div>
    )
}