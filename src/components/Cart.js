import { useSelector } from "react-redux/es/hooks/useSelector";
import RestaurantCategoryList from "../components/RestaurantCategoryList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="">
            <div className="flex justify-between w-[95%] mx-auto items-center mt-[2%]">
                <h1 className="font-medium ">Cart</h1>
                <div className="flex items-center w-fit px-[7px] py-[2px] m-2 shadow-sm rounded-lg border-[0.01px] border-[#00000033] hover:bg-black hover:text-white">
                    <MdOutlineCancel className="mr-1" />
                    <button className="  " onClick={handleClearCart}>Clear cart</button>
                </div>
            </div>
            <RestaurantCategoryList data={cartItems} />
        </div>
    )
}
export default Cart;