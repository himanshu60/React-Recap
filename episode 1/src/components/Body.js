import RestaurantCard from "./RestaurantCard";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";
import { SWIGGY_API } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // `List` is the master copy from the API and never changes after the fetch.
  // `filteredList` is what actually gets rendered. Keeping them separate means
  // a search or filter can always be re-run against the full set.
  const [List, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  // Tracks the request itself, not the list. An empty List can also mean
  // "the filter matched nothing", which must NOT show skeletons.
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    try {
      // STEP 1 - Ask for the data.
      // SWIGGY_API is a relative path, so the browser sends it to our own dev
      // server, which forwards it to swiggy.com. Same origin => no CORS check.
      const response = await fetch(SWIGGY_API);

      // STEP 2 - Check the status ourselves.
      // fetch() only rejects when the network fails. A 403 or 404 still counts
      // as "resolved", and .json() would then blow up on an HTML error page.
      if (!response.ok) throw new Error("HTTP " + response.status);

      // STEP 3 - Read the body and parse the JSON text into a JS object.
      const json = await response.json();

      // STEP 4 - Unwrap the envelope. This endpoint wraps Swiggy's own
      // response, so there are TWO levels of `data` before `cards`:
      //   { status, message, data: { data: { cards: [...] } } }
      // `cards` is a MIXED list - banners, the "what's on your mind" row,
      // filter bars, the footer, AND the restaurant grid.
      const { cards } = json.data.data;
      // console.log(cards)
      // STEP 5 - Find the card holding the restaurant grid.
      // Its position shifts between requests, so match on SHAPE, not index:
      // keep the first card that actually has a `restaurants` array inside.
      const gridCard = cards.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      // STEP 6 - Reach in and pull that array out.
      // `?? {}` guards the case where no grid card was found, so destructuring
      // never runs against undefined.
      const { restaurants } =
        gridCard?.card?.card?.gridElements?.infoWithStyle ?? {};

      // Each item is { info: { name, cuisines, avgRating, costForTwo, sla } },
      // which is exactly the shape RestaurantCard already reads.
      // console.log("Restaurants from API:", restaurants);

      // STEP 7 - Save into state. That re-renders Body, and the .map() below
      // draws one <RestaurantCard /> per restaurant. Fall back to the mock
      // list if the API shape changed and we came up empty.
      setList(restaurants);
      setFilteredList(restaurants);
    } catch (err) {
      // Keeps the page rendering from mockData instead of crashing.
      console.error("Fetch failed, using mock data:", err);
    } finally {
      // `finally` runs on both success and failure, so the skeletons can
      // never get stuck on screen forever.
      setIsLoading(false);
    }
  }

  const onlineStatus =useOnlineStatus();
  console.log(onlineStatus)
  if(onlineStatus === false ) {
    return(
      <h1>Looks like you are offline!! please check your internet Connection;</h1>
    )
  }

  return (
    <main className="body">
      <div className="filter mx-auto flex max-w-[1320px] flex-wrap items-center gap-3 px-6 pt-6">
        <div className="search flex min-w-[230px] flex-1 gap-2">
          <input type="text" className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10" aria-label="Search restaurants" value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }} />
          <button className="search-btn rounded-lg bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            onClick={() => {
              // Always search the MASTER list, never the already-filtered one,
              // otherwise each search narrows what the next one can find.
              // toLowerCase on both sides makes it case-insensitive.
              const filterRes = List.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredList(filterRes)
            }}
          >Search</button>

        </div>
        <button className="filter-btn rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700" onClick={() => {
          // Same rule: filter from `List`, render into `filteredList`, so the
          // full set is still there when the user clears the filter.
          const filterList = List.filter((res) => res?.info?.avgRating > 4.4);
          setFilteredList(filterList)
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* While the request is in flight, fill the grid with placeholders
            of the same shape so the layout does not jump when data lands. */}
        {isLoading
          ? Array.from({ length: 12 }, (_, i) => (
            <RestaurantCardSkeleton key={i} />
          ))
          : filteredList.map((restaurant) => (
            <Link className="block text-inherit no-underline" key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}><RestaurantCard  resData={restaurant} /></Link>
          ))}
      </div>

      {/* Without this, a search that matches nothing just shows a blank page. */}
      {!isLoading && filteredList.length === 0 && (
        <p className="no-results">No restaurants matched your search.</p>
      )}

    </main>
  )
}

export default Body;