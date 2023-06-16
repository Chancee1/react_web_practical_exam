import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import auth from "../utils/token";
import StatBox from "../components/statBox";
import Chart from "../components/chart";
import PageWithSidebar from "../layout/pageWithSibebar";
import Header from "../components/header";


const Dashboard = () =>{
    const token = auth.getToken();
    const fetchData = async() =>{
        if(token){
            let response = await axiosInstance.get('/user/all', {headers: {'Authorization': token}})
        }
    }
    useEffect(() => {
      fetchData()
    }, [])

    const [selected, setSelected] = useState('USERS')
    
    const users = [
        {name: "Chance Ineza", email: "jinezachance@gmail.com"},
        {name: "Chance Ineza", email: "jinezachance@gmail.com"},
        {name: "Chance Ineza", email: "jinezachance@gmail.com"},
        {name: "Chance Ineza", email: "jinezachance@gmail.com"},
    ]


    
    return(
        <PageWithSidebar>
                    <Header title="Dashboard"/>
                    <div className="grid grid-cols-4 gap-x-8 gap-y-8 grid-rows-4">
                       <StatBox number={100} category="users" color="#007AFE"/>
                       <StatBox number={100} category="users" color="#FE4C00"/>
                       <StatBox number={100} category="users" color="#FEC600"/>
                       <StatBox number={100} category="users" color="#00C14D" />
                       <div className="col-span-3 bg-white row-span-3">
                        <Chart/>
                       </div>
                       <div className="bg-white row-span-2 rounded-[10px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        <h1 className="p-3 font-bold">Recent</h1>
                        <div className="bg-[#EAF5FF] rounded-[5px] h-7 w-[93%] mx-auto flex justify-between items-center px-3">
                           <div className={`text-[12px] font-bold ${selected == 'USERS' && "bg-white py-1 px-2 box-border rounded-[5px] shadow"}`} onClick={() => {setSelected("USERS")}}>USERS</div>
                           <div className={`text-[12px] font-bold ${selected == 'PRODUCT' && "bg-white py-1 px-2 box-border rounded-[5px] shadow"}`} onClick={() =>{setSelected("PRODUCT")}}>PRODUCT</div>
                           <div className={`text-[12px] font-bold ${selected == 'ACTIVITY' && "bg-white py-1 px-2 box-border rounded-[5px] shadow"}`} onClick={() => {setSelected("ACTIVITY")}}>ACTIVITY</div>
                        </div>
                        <div className="px-5 py-2">
                            {users.map(user => 
                            <div className="flex my-2">
                                <p className="text-[#666666] font-semibold text-[12px]">+</p>
                                <div className="text-[#666666] font-semibold text-[12px] px-2">
                                    <div>{user.name}</div>
                                    <div>{user.email}</div>
                                </div>
                            </div>
                            
                            )}
                        </div>
                       </div>
                    </div>
                </PageWithSidebar>
    )
}

export default Dashboard;