import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { changeQuantity } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

const CartItem = ({id, name, price, imageUrl, quantity}) =>{
    const dispatch = useDispatch()
    const handleChangeQuantity = (itemId, change) => {
            dispatch(changeQuantity(itemId, change));
        
      };
    

    
    return(
        <div className="flex h-16 items-center justify-between">
            <div className="w-[28%] rounded-[8px] h-full">
                <img src="https://th.bing.com/th?id=OIP.tkb7l6QJg4csrSU6RZYZRwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="cart item image" srcset="" className="object-cover h-full"/>
            </div>
            <div className=" w-[68%]">
                <p className="text-[10px] font-bold">{name}</p>
                <div className='flex justify-between items-center'>
                    <div className="font-semibold text-[12px]">{price}</div>
                    <div className='flex w-[40%] justify-between'>
                    <button className='rounded-[2px]' onClick={() => handleChangeQuantity(id, 1)}>
                    <AddIcon style={{fontSize: 14}} />
                    </button>
                <span>{quantity}</span>
                <button onClick={() => handleChangeQuantity(id, -1)}>
                    <RemoveIcon style={{fontSize: 14}} />
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CartItem;