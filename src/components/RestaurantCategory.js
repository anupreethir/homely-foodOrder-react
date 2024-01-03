import RestaurantCategoryList from "./RestaurantCategoryList";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RestaurantCategory = ({ data, showItems, setShowCategory }) => {
    const handleClick = () => setShowCategory();
    return (
        <div className="">
            <div onClick={handleClick} className="flex justify-between border-b-[0.5px] border-b-veryLightBlack mb-5 cursor-pointer">
                <h1 className="font-semibold text-lg">{data.title}</h1>
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div>
            {showItems && <RestaurantCategoryList data={data?.itemCards} />}
        </div>
    );
}
export default RestaurantCategory;