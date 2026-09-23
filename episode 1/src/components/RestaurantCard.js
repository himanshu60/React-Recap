import { CDN_URL, FALLBACK_IMG } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    // `?? {}` so one malformed item can't crash the whole list.
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
        resData?.info ?? {}
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                onError={(e) => {
                    e.currentTarget.onerror = null; // stop retrying if the fallback ever fails
                    e.currentTarget.src = FALLBACK_IMG;
                }}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;