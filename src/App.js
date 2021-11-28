import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import{Routes ,Route} from "react-router-dom"
import Post from './Post';
import ToDo from './ToDo';

function App() {
  return (
    <div className="container">
      
      <NavBar />
     

        <br />
        <Header />
        <Routes>
          <Route path="/Post" element={<Post />}/>
          <Route path="/ToDo" element={<ToDo />}/>
        </Routes>
        <br/>
       
        <br />
        <br />
        <br />
        <Footer />
       
      
    </div>
  );
}

export default App;
