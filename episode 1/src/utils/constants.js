export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Shown when a restaurant's own image 404s.
export const FALLBACK_IMG =
    CDN_URL + "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/acfcaacc-edf0-4189-8264-d614d312c0ee_740457.JPG";

export const LogoURL = "https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"

// Relative path on purpose: Parcel's dev server forwards /dapi to swiggy.com
// (see .proxyrc), so the browser treats this as a same-origin request.
export const SWIGGY_API ="https://namastedev.com/api/v1/listRestaurants/";

// FULL url, not a relative one: the menu endpoint blocks Parcel's Node-side
// proxy (it answers 202 with an empty body), so the request has to be made by
// Chrome itself. That means CORS applies -> the Allow CORS extension must be
// toggled ON for this to return data.
export const RESID_API = "https://namastedev.com/api/v1/listRestaurantMenu/"

// export default { CDN_URL, FALLBACK_IMG, LogoURL }