import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemDisplay = ({name, price, quantity, imageUrl, handleAddToCart, id}) =>{
    return(
        <div className='h-70 bg-white p-3 rounded-[8px]'>
            <div className='relative h-[50%]'>
                <img src={imageUrl} alt="Product Image" className='object-cover h-30'/>
                <div className='absolute top-0 right-0'>
                   <div className='bg-white my-2 mx-2 rounded-[2px] p-1 bg-opacity-80' onClick={() => {handleAddToCart(name, imageUrl, price, id)}}>
                    <ShoppingCartIcon style={{color: '#6D6D6D', fontSize: 20, padding: 2}}/>
                   </div>
                </div>
            </div>
            <div className='font-bold text-[15px] w-[80%] py-4'>
                {name}
            </div>
            <div className='flex justify-between w-[50%] items-center'>
            <p className='text-[17px] text-[#007AFE] font-bold'>{price}</p>
                <p className='text-[13px] text-[#6D6D6D] font-semibold'>{quantity}</p>
            </div>
        </div>
    )
}


export default ItemDisplay;