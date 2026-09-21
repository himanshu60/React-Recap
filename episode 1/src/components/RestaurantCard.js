import { CDN_URL, FALLBACK_IMG } from "../utils/constants"

const RestaurantCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, costForTwo, sla } = resData?.info
    // console.log(resData)
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={CDN_URL + resData?.info?.cloudinaryImageId}
                alt={resData?.info?.name}
                onError={(e) => {
                    e.currentTarget.onerror = null; // stop retrying if the fallback ever fails
                    e.currentTarget.src = FALLBACK_IMG;
                }}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;