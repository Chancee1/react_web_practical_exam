
const Category = ({category, selected, handleCategory}) =>{
    return(
        <div className={`h-8 w-[19%] rounded-[8px] flex justify-center items-center text-[13px] font-semibold ${selected ? "bg-[#007AFE] text-white": "bg-white text-black"}`} onClick={() => {handleCategory(category)}}>{category}</div>
    )
}


export default Category;