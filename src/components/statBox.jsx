import { AccountCircle } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../actions/cartActions";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StatBox = ({number, category, color}) =>{
    const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
    const handleAddToCart = (item) =>{
        dispatch(addToCart(item));
    }
    return(
        <div className="w-[100%] flex flex-col justify-center items-center shadow-md ring-opacity-50 p-8 rounded-[10px] bg-white col-span-4 sm:col-span-2 md:col-span-1">
            <div className="flex justify-center w-[50%] items-center mb-2">
              <ShoppingCartIcon style={{color: '#6D6D6D', fontSize: 40}}/>
                {/* <div className="text-[20px] font-bold">{number}</div> */}
            </div>
            <div className="mx-auto text-[14px] text-[#6D6D6D]">{category}</div>
            <button onClick={() => {handleAddToCart(category)}} className="w-[90%] bg-[#007AFE] text-white rounded-xl text-[12px] h-8">Add to cart</button>
        </div>
    )
}

export default StatBox;