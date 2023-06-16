import Header from "../components/header";
import Table from "../components/table";
import PageWithSidebar from "../layout/pageWithSibebar";


const UsersPage = () =>{
    const headers = ["Firstname", "Lastname", "Email", "Phone", "Date of Registration"]
    const users = [
        {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    },
    {firstname: "Chance", 
        lastname: "Ineza", 
        email: "jinezachance@gmail.com", 
        phone: "+250799373686", 
        registeredOn: "12/6/2023"
    }
    ]
    return(
        <PageWithSidebar>
            <Header title="Users"/>
            <Table headers={headers} rows={users}/>
        </PageWithSidebar>
    )
}

export default UsersPage;