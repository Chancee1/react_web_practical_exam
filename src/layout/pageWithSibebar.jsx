import Sidebar from "../components/sidebar";

const PageWithSidebar = ({children}) =>{
    return(
        <div className="flex">
            <Sidebar/>
            <div className="p-6 bg-[#F7F8FC] w-[80%]">
                {children}
            </div>
        </div>
    )
}

export default PageWithSidebar;