import { useSelector } from "react-redux/es/hooks/useSelector";
import RestaurantCategoryList from "../components/RestaurantCategoryList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1>Cart</h1>
            <button className="bg-[black] text-white p-2 rounded-md" onClick={handleClearCart}>Clear cart</button>
            <RestaurantCategoryList data={cartItems} />
        </div>
    )
}
export default Cart;