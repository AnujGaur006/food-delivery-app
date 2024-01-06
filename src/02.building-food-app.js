import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";

const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Body></Body>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

