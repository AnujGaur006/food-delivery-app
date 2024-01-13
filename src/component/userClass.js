import React from "react"; 
import UserContext from "../utils/userContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name: 'dummy',
                location: "earth"
            }
        }
    }

    async componentDidMount(){
        const userData = await fetch("https://api.github.com/users/AnujGaur006");
        const userDataJson = await userData.json();

        this.setState({userInfo: userDataJson});
    }

    componentWillUnmount(){
        console.log("user exited from about us page");
    }

    render(){
        return (
            <div className="user">
                {/* //using react context under a class baded component */}
            <div>Logged In User 
                <UserContext.Consumer>{({loggedInUser}) => <h1>{loggedInUser}</h1>}</UserContext.Consumer>
            </div>   
            <div>Name : {this.state.userInfo.name}</div>
            <div>Location : {this.state.userInfo.location}</div>
            {/* <div>Social handle : {this.props.handle}</div> */}
            {/* <button className="count" onClick={()=> this.setState({
                count : this.state.count + 1
            })}>Count: {this.state.count}</button> */}
        </div>
        )
    };
}

export default UserClass;