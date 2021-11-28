import React,{Component} from "react";
import{Link}from 'react-router-dom';

export default class NavBar extends Component
{
    render()
    {
        return(
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HomePage</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={"/Post"}>Post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"/ToDo"}>To Do</Link>
        </li>
       
          
        
      </ul>
      
    </div>
  </div>
</nav>
            </>
        )
    }
}