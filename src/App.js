import logo from './logo.svg';
import './App.css';
// import { ParamHTMLAttributes } from 'react';
// import ParentComponent from './ParentComponent';
// import FromComponent from './FromComponent';
// import RefsExample from './RefsExample';
import RefsCallBack from './RefsCallBack';
import DynamicClass from './DynamicClass';
function App() {
   const name="Ram";
     const age=23;
  return (
    <div>
        {/* <FromComponent /> */}
        <h1 className={"my-class"}> From App </h1>
        < div className={"my-div"}>I Am Inside my div</div>
        <DynamicClass />
        {/* <RefsExample /> */}
        {/* <RefsCallBack /> */}
      {/* <ParentComponent /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
