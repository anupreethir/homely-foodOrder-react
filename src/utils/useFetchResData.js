import { useState, useEffect } from "react";
import { RES_URL } from "./constants";
const UseFetchResData = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RES_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    }
    return resMenu;
}
export default UseFetchResData;