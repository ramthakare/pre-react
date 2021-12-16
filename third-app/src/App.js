import logo from "./logo.svg";
import "./App.css";
//import "./Styles.scss";
// import { ParamHTMLAttributes } from 'react';
// import ParentComponent from './ParentComponent';
// import FromComponent from './FromComponent';
// import RefsExample from './RefsExample';
import RefsCallBack from "./RefsCallBack";
import DynamicClass from "./DynamicClass";
import MarkComponent from "./MarkComponet";
import SassDemo from "./SassDemo";
import RadiumDemo from "./RadiumDemo";
import TestComponent from "./TestComponent";
function App() {
  //  const name="Ram";
  //    const age=23;
  return (
    // {/* <h1>Well come to sass</h1> */}
    // {/* <SassDemo /> */}
    // {/* <RadiumDemo /> */}
    <TestComponent name={"Ram"} />

    // {/* <FromComponent /> */}
    // {/* <h1 className={"my-class"}> From App </h1>
    //   < div className={"my-div"}>I Am Inside my div</div> */}
    // {/* <DynamicClass /> */}
    // {/* <MarkComponent /> */}
    // {/* <RefsExample /> */}
    // {/* <RefsCallBack /> */}
    // {/* <ParentComponent /> */}
  );
}

export default App;
