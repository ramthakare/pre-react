// import reactDom from "react-dom"
//   import reactDom from "react-dom";
import { ReactDOM } from "react";

export default () =>{
    return ReactDOM.createPortal(
        <h1>In PortalDemo</h1>,
        document.getElementById("root-poratal")
    );
};