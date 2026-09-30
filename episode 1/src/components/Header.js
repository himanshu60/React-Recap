import { LogoURL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login")
  const onlineStatus = useOnlineStatus();
  return (
    <header className="flex min-h-[76px] w-full flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-slate-200 bg-white px-4 py-2 shadow-sm sm:px-6 lg:px-8">
      <div className="flex shrink-0 items-center">
        <img className="h-12 w-[88px] object-contain" src={LogoURL} alt="Food app logo" />
      </div>
      <nav className="flex min-w-0 flex-1 justify-end" aria-label="Main navigation">
        <ul className="m-0 flex list-none flex-wrap items-center justify-end gap-1 p-0 text-sm font-medium sm:gap-2">
          <li className="hidden items-center rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 sm:flex">
            OnlineStatus: {onlineStatus ? "Active" : "Offline"}
          </li>
          <li><Link className="rounded-md px-2 py-2 text-slate-600 no-underline transition-colors hover:bg-emerald-50 hover:text-emerald-800" to="/">Home</Link></li>
          <li><Link className="rounded-md px-2 py-2 text-slate-600 no-underline transition-colors hover:bg-emerald-50 hover:text-emerald-800" to="/about">About</Link></li>
          <li><Link className="rounded-md px-2 py-2 text-slate-600 no-underline transition-colors hover:bg-emerald-50 hover:text-emerald-800" to="/contact">Contact Us</Link></li>
          <li><Link className="rounded-md px-2 py-2 text-slate-600 no-underline transition-colors hover:bg-emerald-50 hover:text-emerald-800" to="/">Cart</Link></li>
          <li>
            <button className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            onClick={() => {
              btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login")
            }
            }
            >{btnNameReact}</button>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header;