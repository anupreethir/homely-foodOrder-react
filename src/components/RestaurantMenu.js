import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import UseFetchResData from "../utils/useFetchResData";
import { useState } from "react";
import ShimmerUi from "./ShimmerUi";

const RestaurantMenu = () => {

  const [showCategory, setShowCategory] = useState(0);

  const { resId } = useParams();
  const resMenu = UseFetchResData(resId);


  if (!resMenu) {
    return <ShimmerUi></ShimmerUi>;
  }
  const resMenuList = resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards;

  const menuCategory = resMenuList.filter((res) => res.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const {
    name,
    cuisines,
    areaName,
    sla,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resMenu?.cards[0]?.card?.card?.info;


  return (

    <div className="w-[60%]  mx-auto my-[5%]">
      <div className="flex items-center justify-between border-b-[0.5px] border-b-veryLightBlack mb-6 pb-5">
        <div className="">
          <h1 className="text-lg font-semibold">{name}</h1>
          <div className="text-sm text-lightBlack">{cuisines.join(", ")}</div>
          <div className="text-sm text-lightBlack">{areaName}, {sla.lastMileTravelString}</div>
        </div>
        <div className="flex justify-center items-center flex-col p-[0.5%] border-[0.2px] border-veryLightBlack" >
          <div className="">{avgRatingString}</div>
          <div className="text-xs border-t-[0.2px] border-b-veryLightBlack">{totalRatingsString}</div>
        </div>
      </div>
      <div className="flex  mb-6">
        <div className='font-normal pr-5 border-[0.5px] border-veryLightBlack p-4'>{costForTwoMessage.toUpperCase()}</div>
        <div className='font-normal pl-5 border-[0.5px] border-veryLightBlack p-4'>{sla.slaString}</div>
      </div>

      {/* controlled component */}
      <div className="">
        {menuCategory.map((res, index) => <RestaurantCategory
          key={res?.card?.card?.title}
          data={res?.card?.card}
          showItems={index === showCategory ? true : false}
          setShowCategory={() => showCategory ? setShowCategory(null) : setShowCategory(index)} />)}
      </div>
    </div>
  );
};
export default RestaurantMenu;
