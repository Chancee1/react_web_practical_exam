import { useState, useEffect } from "react";
import Header from "../components/header";
import PageWithSidebar from "../layout/pageWithSibebar";
import { axiosInstance } from "../utils/axiosInstance";
import auth from "../utils/token";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const token = auth.getToken()
    if(!token){
        return(
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className="text-[30px] text-[#007AFE]">Log in first!</div>
                <Link to="/login" className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10">Go Back!</Link>
            </div>
        )
    }
    const fetchData = async() =>{
       let response = await axiosInstance.get("/user/profile", {headers:{'Authorization': token}})
       setUser(response.data.data)
       setLoading(false)
       console.log("response",response)
    }
    useEffect(() => {
      fetchData();
    }, [])
    
    return (
        !loading ? <PageWithSidebar>
            <Header title="Profile" />
            <div className="bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%] py-10 px-8">
            <div className="flex justify-between w-[35%]">
                <AccountCircleIcon style={{color: '#6D6D6D', fontSize: 45}}/>
                <div>
                    <p className="">Firstname: {user.firstname}</p>
                    <p>Lastname: {user.lastname}</p>
                    <p>Email: {user.email}</p>
                </div>
            </div>
            </div>
        </PageWithSidebar> : <div>Loading!</div>
    )
}

export default ProfilePage;