import { RESID_API } from "../utils/constants";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo =useRestaurantMenu(resId);
    // Guard FIRST: the lines below need data, and they run on every render -
    // including the first one, before the fetch has finished.
    if (resInfo === null) return <Skeleton />;

    // resInfo IS json.data, and cards sits directly on it.
    const { cards } = resInfo;

    // The menu response has no gridElements - the restaurant details live on
    // whichever card carries an `info` object.
    const info = cards.find((c) => c?.card?.card?.info)?.card?.card?.info;
    const { name, cuisines, avgRating, costForTwo, sla } = info ?? {};

    // The menu lives on the card that has `groupedCard` (index 4 here, but
    // find it by shape so a reordered response doesn't break it).
    const groupedCard = cards.find((c) => c?.groupedCard);
    const categories = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

    // Each category card holds an `itemCards` array - the dishes.
    const itemCards =
        categories.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards ?? [];
    console.log(itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h4>{costForTwo}</h4>
            <h5>{avgRating}</h5>
            <h2>Menu</h2>
            <ul>
                {/* Nested destructuring in the parameter: each item is
                    { card: { info: { id, name, price, ... } } } */}
                {itemCards.map(({ card: { info } }) => (
                    <li key={info.id}>{info.name} -{"Rs"} 
                    {info.price / 100 || info.defaultPrice / 100}
                    </li> 

                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
