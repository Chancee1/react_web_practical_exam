import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SummarizeIcon from '@mui/icons-material/Summarize';
const Sidebar = () =>{
    const location = useLocation();
    return(
        <div className="w-[15%] md:w-[20%] h-[100vh] bg-white">
            <div className="flex items-end justify-around w-[60%] p-6">
                <img src="/src/assets/lotus.png" alt="logo" height={50} width={50}/>
                <p className="text-[#007AFE] text-[13px] font-bold h-6">SMS</p>
            </div>
            <div className=" mt-5">
                <ul>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/explore" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                    <SavedSearchIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/explore" className={`${location.pathname=="/explore" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%] md:block hidden`}>Explore</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/cart" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <ShoppingCartIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/cart" className={`${location.pathname=="/cart" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%] md:block hidden`}>Cart</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/report" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <SummarizeIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/report" className={`${location.pathname=="/report" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%] md:block hidden`}>Report</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/profile" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <AccountCircleIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/profile" className={`${location.pathname=="/profile" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%] md:block hidden`}>Profile</Link>
                    </li>
                    <li className={`h-10 hover:bg-[#F0F1F7] hover:rounded-[6px] flex justify-evenly py-2 px-6 w-[80%] my-3 ${location.pathname=="/logout" && "bg-[#F0F1F7] rounded-[6px]"}`}>
                        <LogoutIcon style={{color: '#6D6D6D', fontSize: 20}}/>
                    <Link to="/logout" className={`${location.pathname=="/logout" ? " text-[#007AFE]": "text-[#6D6D6D]"} text-[12px] md:text-[14px] font-semibold w-[50%] md:block hidden`}>Log out</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;