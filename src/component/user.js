import { useState } from "react";

const User = ({name, location, handle}) => {
    const [count, setCount] = useState(0);

    return (
        <div className="user">
            <div>Name : {name}</div>
            <div>Location : {location}</div>
            <div>Social handle : {handle}</div>
            {/* <button className="count" onClick={()=> setCount(count + 1)}>Count : {count}</button> */}
        </div>
    );
};

export default User;