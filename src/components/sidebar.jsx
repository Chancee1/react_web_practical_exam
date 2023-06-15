import React from "react";

const Sidebar = () =>{
    return(
        <div className="w-[20%] p-6 shadow-md ring-opacity-20 ring-offset-2 h-[100vh]">
            <div className="flex items-end justify-around w-[60%]">
                <img src="/src/assets/lotus.png" alt="logo" height={40} width={40}/>
                <p className="text-[#007AFE] text-[13px] font-bold h-6">Doubble</p>
            </div>
            <div>
                <ul>
                    <li><a href="">Dashboard</a></li>
                    <li>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;