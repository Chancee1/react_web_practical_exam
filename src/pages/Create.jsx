import { useState } from "react";
import Header from "../components/header";
import PageWithSidebar from "../layout/pageWithSibebar";
import { SectionOne, SectionTwo } from "../components/create";
import auth from "../utils/token";
import {Link} from "react-router-dom"

const CreatePage = () => {
    const [selected, setSelected] = useState(1);
    const token = auth.getToken();
    if(!token){
        return(
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className="text-[30px] text-[#007AFE]">Log in first!</div>
                <Link to="/login" className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10">Go Back!</Link>
            </div>
        )
    }
    const sections = [
        {
            head: "Create Product",
            text: "Enter Product Details"
        },
        {
            head: "Create Product",
            text: "Enter Product Details"
        }
    ]
    return (
        <PageWithSidebar>
            <Header title="Create" />
            <div className="flex flex-col md:flex-row md:justify-around bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%] py-10 px-8 justify-center">
                <div className='w-full md:w-[23%] md:h-[150px] md:border border-[#DFE0EB] rounded-[7px] p-5 flex justify-between md:flex-col flex-row h-[70px]'>
                        {
                            sections.map((section, index) =>
                                <div className="info-container flex justify-around mb-5" onClick={()=>{setSelected(index+1)}}>
                                    <div className={`w-7 h-7 rounded-[50%] text-white flex items-center justify-center border ${selected == index+1 ? "bg-[#007AFE]": "bg-[#9E9E9E]"}`}>
                                        <p className="text-white text-[11px]">{index+1}</p>
                                    </div>
                                    <div className='info'>
                                        <p className='text-[13px] '>{section.head}</p>
                                        <p className='text-[11px] text-[#9FA2B4]'>{section.text}</p>
                                    </div>
                                </div>
                            )
                        }
                </div>
                <div className='w-full md:w-[65%]'>
                    <div className="details-container">
                        {
                            selected == 1 ? <SectionOne /> : <SectionTwo />
                        }
                    </div>
                </div>
            </div>
        </PageWithSidebar>
    )
}

export default CreatePage;