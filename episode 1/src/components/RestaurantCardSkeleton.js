import Skeleton from "./Skeleton";

// A placeholder shaped like RestaurantCard. It reuses the same `res-card`
// class, so it sits in the grid at exactly the size the real card will be -
// that is what stops the page from jumping when the data arrives.
const RestaurantCardSkeleton = () => (
  <div className="res-card res-card-skeleton">
    <Skeleton className="skeleton-logo" />
    <Skeleton className="skeleton-title" />
    <Skeleton className="skeleton-line" />
    <Skeleton className="skeleton-line skeleton-line-short" />
    <Skeleton className="skeleton-pill" />
    <Skeleton className="skeleton-meta" />
  </div>
);

export default RestaurantCardSkeleton;
