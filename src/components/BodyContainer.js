import { IoSearchOutline } from "react-icons/io5";
import ResCard, { withFreeDelivery } from "../components/ResCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { PiCaretDownBold } from "react-icons/pi";
import ShimmerUi from "./ShimmerUi";

const BodyContainer = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [shimmer, setShimmer] = useState(false);
  const FreeDeliveryRes = withFreeDelivery(ResCard);
  console.log(searchText, "searchText");
  // {
  //   searchText.length === 0 ? setShimmer(true) : setShimmer(false);
  // }
  const enterKeyPress = (e) => {
    if (e.keyCode === 13) {
      setSearchValue(e.target.value.toLowerCase());
      const filteredList = resList.filter((res) => {
        res.info.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase());
      });
      setResList(filteredList);
    }
  };
  useEffect(() => {
    setShimmer(searchText.length === 0);
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9009877&lng=80.2279301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    // console.log(json, "jsonMain");

    setResList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchText(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // console.log(searchText, "resList");


  return (

    <div className="m-auto w-[90%] flex flex-col justify-center">
      <div className="mt-5 mb-5 flex w-full justify-center items-center">
        <IoSearchOutline className="text-red relative left-7" />
        <input
          className="input w-3/4   shadow-md pl-10 p-3 rounded-lg focus-visible:outline-none "
          type="search"
          placeholder="Search 'Briyani'"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setSearchValue(e.target.value);
              const filteredList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setSearchText(filteredList);
            }
          }}
        />
      </div>
      {/* filter */}
      <div className="ml-5 mr-5">
        <button
          className="shadow-sm rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating >= 4
            );
            setSearchText(filteredList);
          }}
        >
          Rating 4.0+
        </button>
        <button
          className="shadow-sm rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating >= 4
            );
            setSearchText(filteredList);
          }}
        >
          Pure Veg
        </button>
        <button className="shadow-sm rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]">
          Veg
        </button>
      </div>

      <div className="flex flex-wrap justify-center w-[90vw]">
        {shimmer && <ShimmerUi></ShimmerUi>}
        {/* // <ResCard variable resName = 'abc'value/>  */}
        {searchText.map((res) => {
          return (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              {res.info.isOpen ? (
                <FreeDeliveryRes key={res.info.id} resData={res} />
              ) : (
                <ResCard key={res.info.id} resData={res} />
              )}
            </Link>

          );
        })}
      </div>
    </div>
  );
};

export default BodyContainer;
