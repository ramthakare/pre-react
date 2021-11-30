import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';
import ToDo from './ToDo';
import Footer from './Footer';
import User from './User';

function App() {
  return (
    <div className="container">
     
     <Header />
     <NavBar />
     <Routes>
       <Route path={"/post"} element={<Post />}/>
        <Route path={"/todo"} element={<ToDo />}/> 
        <Route path={"/user"} element={<User />}/> 
     </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
