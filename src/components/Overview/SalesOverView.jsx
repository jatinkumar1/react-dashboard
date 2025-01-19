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
export default function SalesOverView() {
    return (
        <div className=" bg-gray-400 backdrop-blur-md overflow-hidden shadow-lg rounded-xl ">
            <p className="text-grey ml-6 mt-2 text-xl">Sales Overview</p>
            <div className="relative " style={{ height: "300px" }}>
                <Line
                    data={{
                        labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
                        datasets: [{
                            label: "",
                            data: [4000, 3800, 5500, 4400, 5200, 6700, 6000, 5700, 6600, 6300, 6800, 7500],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }]
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: false,
                                ticks: {
                                    callback: function (value) {
                                        return `$${value}`;
                                    },
                                },
                            },
                        },
                    }}
                >

                </Line>
            </div>
        </div>
    )
}