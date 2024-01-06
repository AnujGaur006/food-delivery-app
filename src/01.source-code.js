import React from "react";
import ReactDOM from "react-dom/client";

// React element => Object => HTMLElement (render)
// const heading = React.createElement("h1",{"id":"heading"},"Hello React!");

// JSX - this isn't plain HTML, but has similar syntax
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const JsxTitle = () => <h1 className="head">React using JSX</h1>;
const title2 = <h6>Javascript variables</h6>;

const HeadingComponent = () => (
    <div id="container">
                <JsxTitle />
                {title2}
                {JsxTitle()}
                <h1 className="heading">React Functional Component</h1>
        </div>
);

const main = ReactDOM.createRoot(document.getElementById("root"));
main.render(<HeadingComponent/>); 

// React Component  
// Class Based Component - old
// Functional Component - new standard, function that returns a JSX code    