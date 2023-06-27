import { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosInstance";
import auth from "../utils/token";
import StatBox from "../components/statBox";
import Chart from "../components/chart";
import PageWithSidebar from "../layout/pageWithSibebar";
import Header from "../components/header";
import {Link} from "react-router-dom"
import Category from "../components/category";
import ItemDisplay from "../components/itemDisplay";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, changeQuantity } from "../actions/cartActions";
import CartItem from "../components/cartItem";

const Dashboard = () =>{
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState();
    const [selectedCat, setSelectedCat] = useState("Drinks");
    const token = auth.getToken();
    const cartItems = useSelector((state) => {
        console.log(state); // Log the state object
        return state.cart.cartItems;
      });
    const dispatch = useDispatch();
    const handleAddToCart = (name, imgUrl, price, id) => {
        let exists = false;
        cartItems?.map(cartItem => {
            if(cartItem.id == id){
                exists = true;
            }
        })

        !exists && dispatch(addToCart(name, imgUrl, price, id));
        
      };
    console.log("cartItems::", cartItems)
    
      const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
    // if(!token){
    //     return(
    //         <div className="flex flex-col items-center justify-center h-[100vh]">
    //             <div className="text-[30px] text-[#007AFE]">Log in first!</div>
    //             <Link to="/login" className="bg-[#007AFE] w-[20%] rounded-[7px] text-[white] flex items-center justify-center h-10">Go Back!</Link>
    //         </div>
    //     )
    // }
    const handleCategory = (category) =>{
        setSelectedCat(category)
    }
    const fetchData = async() =>{
            let response = await axiosInstance.get('/products', {headers: {'Authorization': token}})
            console.log("Response: ", response)
           setUsers(response.data.data)
           setLoading(false)
    }
    useEffect(() => {
      fetchData()
    }, [])

    const [selected, setSelected] = useState('USERS')

    
    return(
        <PageWithSidebar>
                    <Header title="Explore Products"/>
                    <div className="grid grid-cols-7 gap-x-8 gap-y-8 grid-rows-4">
                       <div className="col-span-5 grid grid-cols-3 gap-y-3 gap-x-3">
                           <div className="flex justify-between col-span-3 w-[80%]">
                            <Category category={"Drinks"} selected={selectedCat == "Drinks" ? true: false} handleCategory={handleCategory}/>
                            <Category category={"Food"} selected={selectedCat == "Food" ? true: false} handleCategory={handleCategory}/>
                            <Category category={"Clothes"} selected={selectedCat == "Clothes" ? true: false} handleCategory={handleCategory}/>
                            <Category category={"Utensils"} selected={selectedCat == "Utensils" ? true: false} handleCategory={handleCategory}/>
                           </div>
                           <div>
                            <ItemDisplay id={1} name="Almond Brown Sugar Croissant" price="12.98" quantity={30} imageUrl={"https://th.bing.com/th?id=OIP.tkb7l6QJg4csrSU6RZYZRwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} handleAddToCart={handleAddToCart}/>
                           </div>
                       </div>
                       
                       <div className="bg-white overflow-y-auto h-[100%] col-span-1 md:col-span-2 rounded-[10px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                            <div className="h-[70%]">
                                <h1 className="p-3 font-bold">Your Cart</h1>
                                <div className="px-5 py-2">
                                   {
                                   cartItems && cartItems.map(cartItem =>  <CartItem  imageUrl={cartItem.image} id={cartItem.id} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity}/>)
                                   }
                                </div>
                            </div>
                            <div className="h-[10%]">
                            <div className="bg-[#F0F1F7] h-14 flex justify-center items-center rounded-xl my-3">
                                <p>Total: {calculateTotal()}</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                    <Link to="/checkout" className="bg-[#007AFE] w-[80%] rounded-[7px] text-[white] flex items-center justify-center h-10">Proceed to Checkout</Link>
                            </div>
                            </div>
                        </div>
                       </div>
                </PageWithSidebar>
    )
}

export default Dashboard;