import Sidebar from "../components/sidebar";

const PageWithSidebar = ({children}) =>{
    return(
        <div className="flex">
            <Sidebar/>
            <div className="p-6 bg-[#F7F8FC] w-[85%] md:w-[80%] overflow-y-auto h-[100vh]">
                {children}
            </div>
        </div>
    )
}

export default PageWithSidebar;