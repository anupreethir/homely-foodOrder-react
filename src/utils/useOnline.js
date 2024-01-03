import { useState, useEffect } from "react";
const UseOnline = ()=>{
    const [userOnline, setUserOnline]= useState(true);
    useEffect(()=>{
        checkOnline();
    },[]);
    const checkOnline = ()=>{
        window.addEventListener("online", (event) => {
            setUserOnline(true);
          });
        window.addEventListener("offline", (event) => {
            setUserOnline(false);
          });
    }
    return userOnline;
}
export default UseOnline;