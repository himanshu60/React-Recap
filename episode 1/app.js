import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg" alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
}

const RestaurantCard = (props) => {
  console.log(props)
  const {resName,cuisine} =props
  return (
    <div className="res-card">
      <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xeeitsnacywvvdjczeip" alt="" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.3 star</h4>
      <h4>32 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* restaurant Cards */}
        <RestaurantCard 
        resName="Pav bhaji Foods"
         cuisine="fast food, North India" />
        <RestaurantCard 
        resName="KFC" 
        cuisine="Burger, Italian" />
        <RestaurantCard 
        resName="MacDee" 
        cuisine="rools, Italian" />
        <RestaurantCard 
        resName="Macdonal" 
        cuisine="Pizza, Italian" />
      </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<AppLayout />);
// console.log(parent);
