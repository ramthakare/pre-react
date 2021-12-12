import React, { createElement } from "react";

export default () => {
  // return(
  //     <div>
  //   <h1 style={{ backgroundColor: "red" }}>in DemoComponent // </h1>;
  //   <h2 style={{ backgroundColor: "yellow" }}>In DemoComponent</h2>;
  //   //     </div>
  // )
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement(
  //       "h1",
  //       { style: { backgroundColor: "red" } },
  //       "In DemoComponent"
  //     ),
  //     React.createElement(
  //       "h2",
  //       { style: { backgroundColor: "yellow" } },
  //       "In DemoComponent"
  //     )
  //   );

  //   return (
  // //     <div>
  //       <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
  //       <h2 style={{ backgroundColor: "green" }}>sub-Heading</h2>
  //       <div style={{}} />
  //     </div>
  //   );

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { style: { backgroundColor: "red" } },
      "my Heading"
    ),
    React.createElement(
      "h2",
      { style: { backgroundColor: "green" } },
      "sub Heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },

      React.createElement(
        "p",
        { style: { backgroundColor: "orange" } },
        "This is my First Paregharph"
      ),
      React.createElement(
        "p",
        { style: { backgroundColor: "blue" } },
        "This is my second Paregharph"
      )
    )
  );
};
