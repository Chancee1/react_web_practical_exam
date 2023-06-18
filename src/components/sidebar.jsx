import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () =>{
    const location = useLocation();
    return(
        <div className="w-[30%] md:w-[20%] h-[100vh] bg-white">
            <div className="flex items-end justify-around w-[60%] p-6">
                <img src="/src/assets/lotus.png" alt="logo" height={40} width={40}/>
                <p className="text-[#007AFE] text-[13px] font-bold h-6">Doubble</p>
            </div>
            <div className=" mt-5">
                <ul>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/dashboard" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                    <HomeIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/dashboard" className={`${location.pathname=="/dashboard" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%]`}>Dashboard</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/users" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <PeopleIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/users" className={`${location.pathname=="/users" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%]`}>Users</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/create" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <AddBoxIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/create" className={`${location.pathname=="/create" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%]`}>Create</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/profile" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <AccountCircleIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/profile" className={`${location.pathname=="/profile" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%]`}>Profile</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/logout" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <LogoutIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/logout" className={`${location.pathname=="/logout" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%]`}>Log out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;