import { CLOUDIMG_URL } from "../utils/constants";
import { IoStar } from "react-icons/io5";
const ResCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  } = resData?.info;
  return (
    <div className="flex flex-wrap">
      <div className="card m-6 shadow-md rounded-lg p-3 w-[325px] transition-transform transform-gpu hover:scale-105 hover:shadow-lg">
        <img
          className="w-[300px] h-[150] object-cover rounded-lg"
          src={CLOUDIMG_URL + cloudinaryImageId}
        />

        <div className="flex justify-between mt-[6px]">
          <div className="font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis w-[70%]">{name}</div>
          <div className="rounded-md flex items-center bg-green h-[25px]  px-[3px] py-[1px]">
            <div className="text-[#fff] text-md font-normal">{avgRating} </div>
            <IoStar className="text-white w-4 pl-1" />
          </div>
        </div>
        <div className="flex justify-between mt-[6px]">
          <div className="w-[60%]">
            <div className="whitespace-nowrap overflow-ellipsis overflow-hidden text-[#0000006f] text-sm font-normal">{cuisines.join(', ')}</div>
          </div>
          <div className="">
            <div className="text-[#0000006f] text-sm font-normal">{costForTwo}</div>
          </div>
        </div>
        <div className="text-[#00000097] flex mt-[6px] justify-end">
          <div className="text-sm">{sla.slaString}</div>
        </div>

      </div>
    </div>
  );

};

// Higher Order Component
export const withFreeDelivery = (ResCard) => {
  return (props) => (
    <div>
      <label className=" absolute bg-black px-3 py-1 rounded-sm z-20 ml-5 mt-5 text-white">One Free Delivery</label>
      <ResCard {...props} />
    </div>
  );
};
export default ResCard;
