import { useState } from "react";
import Header from "../components/header";
import PageWithSidebar from "../layout/pageWithSibebar";
import { SectionOne, SectionTwo } from "../components/create";

const CreatePage = () => {
    const [selected, setSelected] = useState(1);
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
            <div className="flex justify-around bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%] py-10 px-8">
                <div className='w-[23%] h-[150px] border border-[#DFE0EB] rounded-[7px] p-5'>
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
                <div className='w-[65%]'>
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