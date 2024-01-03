import { CLOUDIMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import emptyImg from "../../assests/emptyImg.jpg"
const RestaurantCategoryList = ({ data }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItems(item));
    }
    return (
        <div>
            {data.map((item) => {
                return (
                    <div key={item.card.info.id} className="flex justify-between mb-5 w-[90%] mx-auto">
                        <div className="w-[60%]">
                            <h2 className="font-medium">{item.card.info.name}</h2>
                            <p className="text-xs text-lightBlack whitespace-nowrap overflow-hidden overflow-ellipsis w-[80%]">{item.card.info.description}</p>
                            <p>₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
                        </div>
                        <div className="w-[40%] flex justify-end relative">
                            {item.card.info.imageId ? <img className="w-[100px] h-[100px] object-cover rounded-lg" src={CLOUDIMG_URL + item.card.info.imageId} /> : <img className="w-[100px] h-[100px] object-cover rounded-lg" src={emptyImg} />}
                            <button onClick={() => handleAddItem(item)} className="bg-red text-white p-1 absolute top-[80px] right-[22px] rounded-md">Add + </button>
                        </div>
                    </div>
                )
            })}

        </div>)
}
export default RestaurantCategoryList;