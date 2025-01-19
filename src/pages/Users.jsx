import React from "react";
import Header from "../components/common/Header";
import Statebaar from "../components/common/Statebaar";
import { UserRoundCheck, UserRoundMinus, UserRoundPlus, UsersRound } from "lucide-react";
import ProductTable from "../components/Products/ProductsTable";
import SalesOverView from "../components/Overview/SalesOverView";
import CategoryDistribution from "../components/Overview/CategoryDistribution";
import UserTable from "../components/Users/UserTable";
export default function User(){
    return(
        <div className="w-full h-full ">
            {/* top header */}
            <Header tittle={"User"} />
            <div className=" max-w-4xl mx-auto px-4 py-6 space-y-6">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">

                    <Statebaar text={"Total Users"} icon={UsersRound} value={"152,000"} color='#10B981' />
                    <Statebaar text={"New Users Today"} icon={UserRoundPlus} value={"123"} color='#10B981' />
                    <Statebaar text={"Active Users"} icon={UserRoundCheck} value={"99,000"} color='#10B981' />
                    <Statebaar text={"Churn Ratw"} icon={UserRoundMinus} value={"5.8%"} color='#10B981' />
                </div>


                <UserTable/>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
                    <SalesOverView/>
                    <CategoryDistribution/>
                </div>
            </div>

        </div>
    )
}