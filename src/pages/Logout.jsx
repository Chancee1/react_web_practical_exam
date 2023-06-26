import { useState, useEffect } from "react";
import Header from "../components/header";
import PageWithSidebar from "../layout/pageWithSibebar";
import auth from "../utils/token";
import { Link, useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate = useNavigate();
    const token = auth.getToken()
    
    if(!token){
        return(
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className="text-[30px] text-[#007AFE]">Log in first!</div>
                <Link to="/login" className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10">Go Back!</Link>
            </div>
        )
    }
    const handleLogout = () =>{
        auth.removeToken()
        navigate("/login")
    }
    
    return (
       <PageWithSidebar>
            <Header title="Profile" />
            <div className="bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%] py-10 px-8">
                <div className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10" onClick={handleLogout}>Logout</div>
            </div>
        </PageWithSidebar>
    )
}

export default LogoutPage;