import { useEffect } from "react";
import Sidebar from "../components/sidebar";
import { axiosInstance } from "../utils/axiosInstance";
import auth from "../utils/token";


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
    
    
    return(
        <div>
            <div>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Dashboard;