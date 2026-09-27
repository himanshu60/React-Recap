import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Himmu",
                location: "mzn",
                avatar_url:"avtar",
                age: 27,
                // count:0
            },
            count:0,
            
        }
        console.log(props)
        // const {name,location,age}=props
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/himanshu60");
        const json = await data.json();

        this.setState({
            userInfo: json,
            // count:this.state.count+1
        })
        console.log(json)
        // api call
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count){
            console.log("update")
        }
        
    }

    componentWillUnmount(){
        console.log("when change page ")
    }

    render() {
        const { name, location,avatar_url } = this?.state?.userInfo
        const { count } = this.state;
        return (
            <div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>INC</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url} alt="" />
                <h4>Age: 27 </h4>
            </div>
        )
    }
}

export default UserClass;