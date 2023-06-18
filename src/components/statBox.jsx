import { AccountCircle } from "@mui/icons-material";


const StatBox = ({number, category, color}) =>{
    return(
        <div className="w-[100%] shadow-md ring-opacity-50 p-8 rounded-[10px] bg-white col-span-4 sm:col-span-2 md:col-span-1">
            <div className="flex justify-between w-[50%] items-center mb-2">
                <AccountCircle sx={{fontSize: 45, color: color}}/>
                <div className="text-[20px] font-bold">{number}</div>
            </div>
            <div className="mx-auto text-[13px] text-[#6D6D6D]">Total number of {category}</div>
        </div>
    )
}

export default StatBox;