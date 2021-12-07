import logo from './logo.svg';
import './App.css';
import Person from './Person';
import Course from './Coures';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import OnlineOrder from './OnlineOrder';
import OfflinrOrder from './OfflinrOrder';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Redux</h1>
       
      {/* <ClassComponent />
      <FunctionalComponent /> */}
      {/* <OnlineOrder />
      <OfflinrOrder /> */}
      <Person /> 
      <Course /> 
    </div>
  );
}

export default App;
