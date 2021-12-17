import $ from "jquery";
import { useState } from "react";

export default () => {
  // const [showElement, setShowElement] = useState(true);

  const onClickHandler = () => {
    const element = document.getElementById("jquery-operation");
    if (element) {
      console.log("Element Found..");
      $(element).slideToggle();
    } else {
      console.log("Element not Found");
    }
    //setShowElement(!showElement);
    console.log("In Handler");
  };

  return (
    <>
      <h1> In JqueryDemo</h1>
      {/* showElement && ( */}
      <div style={{ backgroundColor: "red" }} id="jquery-operation">
        I will add some twxt content to this div
      </div>

      {/* )} */}
      <button onclick={onClickHandler}> Click me </button>
    </>
  );
};
