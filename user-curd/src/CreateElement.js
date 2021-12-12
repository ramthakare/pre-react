// return (
//     <div>
//       <h1 style={{ backgroundColor: "red" }}>My Heading</h1>
//       <h2 style={{ backgroundColor: "green" }}>My Sub-Heading</h2>
//       <div style={{ backgroundColor: "yellow" }}>
//         <p style={{ backgroundColor: "orange" }}>This is my First Paragraph</p>
//         <p style={{ backgroundColor: "blue" }}>This is my Second Paragraph</p>
//       </div>
//     </div>
//   );

import { createElement } from "react";

return React.createElement(
  "div",
  null,
  createElement("h1", { style: { backgroundcolor: "red" } }, "My Heading"),
  React.createElement("h2",{style:{backgroundcolor:"green"}},"my Sub Heading"),React.createElement("div",{style:{back}})
);
