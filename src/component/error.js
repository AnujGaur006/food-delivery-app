import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return <div className="error">
        <h1>Oops</h1>
        <h3>Something went wrong!!!</h3>
        <div>{err.status} : {  err.statusText}</div>
    </div>
};

export default Error;