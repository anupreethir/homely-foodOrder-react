import { useState } from "react";
// import homelyLogo from "/assests/Homely-logos_transparent.png";
import { Link } from "react-router-dom";
import UseOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useContext } from "react"
import { useSelector } from "react-redux";
const Header = () => {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const contextData = useContext(UserContext);
  // const [loginStatusBtn, setLoginStatusBtn] = useState("Login");
  const userOnline = UseOnline();
  return (
    <div className="flex shadow-md px-5 py-5 justify-between items-center">
      <div className="">
        {/* <img className="logo w-36" src={homelyLogo}/> */}
        <h1 className="from-neutral-950  text-red text-3xl font-bold"><Link to="/">Homely</Link></h1>
      </div>
      <div className="flex">
        <ul className="flex font-semibold" >
          {/* <li className="pr-5">{userOnline ? "🟢" : "🔴"}</li> */}
          <li className="pr-5"><Link to="/">Delivery</Link></li>
          <li className="pr-5"><Link to="/grocery">Grocery</Link></li>
          {/* <li className="pr-5"><Link to="/about">Offers</Link></li> */}
          <li className="pr-5"> <Link to="/cart">Cart ({cartItems.length})</Link></li>
          <li>{contextData.loggedInUser}</li>
        </ul>
        {/* <button className="pr-5 font-semibold" onClick={() => { loginStatusBtn === "Login" ? setLoginStatusBtn("Logout") : setLoginStatusBtn("Login") }}> {loginStatusBtn}  </button> */}
      </div>
    </div>
  )
}

export default Header;