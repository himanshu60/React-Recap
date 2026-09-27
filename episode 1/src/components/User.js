import { useState } from "react";

const User = (props) => {
    const [count,setCount]=useState(0)
    // console.log(props)
   const { name, location, age }=props
    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Age: {age}</h4>
        </div>
    )
}

export default User;