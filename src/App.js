import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
// import Post from './Post';
import { Route, Routes } from 'react-router-dom';
// import ToDo from './ToDo';
import Footer from './Footer';
import User from './User';
import React, { Suspense } from 'react';
import ErrorBoundry from './ErrorBoundry';
import SampleError from './SampleError';
import FragmentSample from './FragmentSample';
const Post=React.lazy(() =>import("./Post"));
const ToDo=React.lazy(() =>import("./ToDo"));
const CodeSpliting=React.lazy(()=>import("./CodeSpliting"));

function App() {
  return (
    <div className="container-fluid">
     
        <h1>Hello App</h1>
        <FragmentSample />
        
     {/* <Header />
     <NavBar />
     <ErrorBoundry>
       <SampleError />
     </ErrorBoundry> */}
     {/* <Suspense fallback={<h1>Loading..........</h1>}>
          <CodeSpliting />
       
     <Routes>
       <Route path={"/post"} element={<Post />}/>
        <Route path={"/todo"} element={<ToDo />}/> 
        <Route path={"/user"} element={<User />}/> 
     </Routes> */}
     {/* </Suspense> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
