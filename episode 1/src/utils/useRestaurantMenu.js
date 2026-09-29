import { useEffect, useState } from "react";
import { RESID_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo]=useState(null)
    //   fetch Data
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
    const data = await fetch(RESID_API + resId);
    const json = await data.json();
    setResInfo(json.data)
    // console.log(json)
}
    return resInfo;
}


export default useRestaurantMenu;