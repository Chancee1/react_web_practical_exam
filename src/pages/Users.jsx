import { useState, useEffect } from "react";
import Header from "../components/header";
import Table from "../components/table";
import PageWithSidebar from "../layout/pageWithSibebar";
import auth from "../utils/token";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";

const UsersPage = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState()
    const token = auth.getToken();
    if (!token) {
        return (
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <div className="text-[30px] text-[#007AFE]">Log in first!</div>
                <Link to="/login" className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10">Go Back!</Link>
            </div>
        )
    }

    const fetchData = async () => {
        let response = await axiosInstance.get('/purchased', { headers: { 'Authorization': token } })
        console.log("Purchases::", response)
        setUsers(response.data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const headers = ["No","Customer Name", "Date", "Product Id","Quantity", "Unit Price", "Total"]
    return (
        <PageWithSidebar>
            <Header title="Users" />
            {
                !loading ? <Table headers={headers} rows={users} itemsPerPage={4}/> : <div>Loading...</div>
            }
        </PageWithSidebar>
    )
}

export default UsersPage;