import logo from './logo.svg';
import './App.css';
import Accessibility from './Accessibility';
import {PersonProvider} from "./PersonContext"
import ContextConsumer from './ContextConsumer';
import {UserProvider } from './UserContext';
import ContextUserFirstChild from './ContextUserFirstChild';


function App() {
  const name="Ram";
  const id=1;
  const password=12344;
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello App</h1>
        {/* <Accessibility /> */}
        {/* <PersonProvider value={{name: "Ram", age:23}}>
          <ContextConsumer />0.

        </PersonProvider> */}
        <UserProvider  value={{name:"Ram" , id:1 , password:123445}}>
          <ContextUserFirstChild />

        </UserProvider>
      </header>
    </div>
  );
}

export default App;
