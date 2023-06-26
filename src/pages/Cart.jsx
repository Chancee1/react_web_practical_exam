import { useState } from "react";
import Header from "../components/header";
import PageWithSidebar from "../layout/pageWithSibebar";
import { SectionOne, SectionTwo } from "../components/create";
import auth from "../utils/token";
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
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

    console.log("Cart Items:", cartItems)
   
    return (
        <PageWithSidebar>
            <Header title="Cart" />
            {
                cartItems.map((item,index) =>(
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                ))
            }
        </PageWithSidebar>
    )
}

export default CartPage;