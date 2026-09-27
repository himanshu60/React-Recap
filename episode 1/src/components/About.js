import UserClass from "./UserClass";
import {Component} from "react";
// import User from "./User";

class About extends Component{
    render(){
          return (
        <div>
            <h1>About Page</h1>
            <h2>This is my first routing component</h2>
            {/* <User name={"Himanshu"}
                  location={"MZN"}
                  age={27}/> */}
            <UserClass name={"Himanshu"}
                  location={"MZN"}
                  age={29} />
        </div>
    )
    }

}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About Page</h1>
//             <h2>This is my first routing component</h2>
//             {/* <User name={"Himanshu"}
//                   location={"MZN"}
//                   age={27}/> */}
//             <UserClass name={"Himanshu"}
//                   location={"MZN"}
//                   age={27} />
//         </div>
//     )
// }

export default About;