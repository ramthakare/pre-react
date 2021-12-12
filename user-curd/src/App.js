import logo from "./logo.svg";
import "./App.css";
import HooksUserSample from "./HooksUserSample";
import NormalProps from "./NormalProps";
import Incrementer from "./Incrementer";
import Increment from "./Increment";
import NewIncrement from "./NewIncrement";
import Decrementer from "./Decrementer";
import Decrement from "./Decrement";
import DemoComponent from "./DemoComponent";
import Reconciliation from "./Reconciliation";

function App() {
  return (
    <div className="App">
      {/* <HooksUserSample /> */}
      {/* <NormalProps render={(someValue) =>{
        return"old name   " +someValue; 
      }} /> */}
      {/* <Incrementer render={(value,onClickHandler)=>{
        return<Increment value={value}
        onClickHandler={onClickHandler}></Increment>
      }} />

<Incrementer render={(value,onClickHandler)=>{
        return<NewIncrement value={value}
        onClickHandler={onClickHandler}></NewIncrement>
      }} />

      <Decrementer render={(value,onClickHandler) =>{
        return<Decrement value={value}
        onClickHandler={onClickHandler}></Decrement>
      }}
  /> */}
      {/* <DemoComponent /> */}
      <Reconciliation />
    </div>
  );
}

export default App;
//
