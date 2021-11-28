import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';
import ToDo from './ToDo';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
     
     <Header />
     <NavBar />
     <Routes>
       <Route path={"/Home"} element={<Post />}/>
        <Route path={"/Link"} element={<ToDo />}/> 
     </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
