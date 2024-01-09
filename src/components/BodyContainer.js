import { IoSearchOutline } from "react-icons/io5";
import ResCard, { withFreeDelivery } from "../components/ResCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";

const BodyContainer = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [shimmer, setShimmer] = useState(false);
  const FreeDeliveryRes = withFreeDelivery(ResCard);

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
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setShimmer(true);
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9009877&lng=80.2279301&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      let json = await data.json();
      const restaurants = json.data?.cards?.filter((res) => res?.card?.card?.id === "top_brands_for_you");
      const topRestaurants = restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResList(topRestaurants);
      setSearchText(topRestaurants);
      setShimmer(false);
    } catch {
      setShimmer(false);
      <h1>Error in fetching the Restaurant data</h1>
    }
  };

  const handleSearch = () => {
    const filteredList = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchText(filteredList);
  }
  const handleFilterByRating = () => {
    const filteredList = resList.filter(
      (res) => res.info.avgRating >= 4
    );
    setSearchText(filteredList);
  }
  const handleFilterVeg = () => {
    const filteredList = resList.filter((res) => res.info.veg === true);
    setSearchText(filteredList);
  }
  const handleFilterNearest = () => {
    const filteredList = resList.filter((res) => res.info.sla.deliveryTime <= 30)
    setSearchText(filteredList);
  }
  return (

    <div className="m-auto w-[90%] flex flex-col justify-center">
      <div className="mt-5 mb-5 flex w-full justify-center items-center">
        <IoSearchOutline className="text-red relative left-7" />
        <input
          className="input w-3/4   shadow-md pl-10 p-3 rounded-lg focus-visible:outline-none"
          type="search"
          placeholder="Search 'Briyani'"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              setSearchValue(e.target.value);
              handleSearch();
            }
          }}
        />
      </div>
      {/* filter */}
      <div className="ml-5 mr-5">
        <button
          className="shadow-sm hover:shadow-md rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]"
          onClick={handleFilterByRating}>
          Rating 4.0+
        </button>
        <button
          className="shadow-sm hover:shadow-md rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]"
          onClick={handleFilterVeg}
        >
          Pure Veg
        </button>
        <button className="shadow-sm hover:shadow-md rounded-lg w-fit p-[7px] m-2 border-[0.01px] border-[#00000033]"
          onClick={handleFilterNearest}>
          Nearest
        </button>
      </div>

      <div className="flex flex-wrap w-[90vw]">
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
