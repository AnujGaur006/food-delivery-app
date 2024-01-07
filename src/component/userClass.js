import React from "react"; 

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