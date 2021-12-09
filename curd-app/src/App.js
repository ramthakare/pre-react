import logo from './logo.svg';
import './App.css';
import HooksSample from './HooksSample';
import RefParent from './RefParent';
import PortalDemo from './PortalDemo';

function App() {

  const onClickHandler =() =>{
    console.log("Clicked");
  }
  return (
    <div className="App" onClick={onClickHandler}>
      {/* <HooksSample /> */}
      {/* <RefParent /> */}
      I Am Inside App Document
      <PortalDemo />
    </div>
  );
}

export default App;
