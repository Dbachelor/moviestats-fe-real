import React,{ useEffect, useState }  from 'react';
import { API_PATH, header, URL_PATH} from './config.js'
import "./css/app.css"
import { Link, NavLink, Route } from 'react-router-dom';
//import { Routes } from './routes'
import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadGames from './homepage.js';
import { uzeGet } from './customhooks/crudhook.js';
import {Bar, Pie, Doughnut, Chart} from 'react-chartjs-2'





function Template() {
  const [gamesByUniqueUsers, setGames] = useState(null)
  const [gamesByPlaytime, setGames2] = useState(null);
  const state = {}
  let count1 = 1;
  let count2 = 1;
  useEffect(() => {
    uzeGet('http://127.0.0.1:4000', '/?search=unique', header, setGames)
    uzeGet('http://127.0.0.1:4000', '/?search=playtime', header, setGames2)
    
  }, []);

  
  
    return (<>





  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand text-info" href="/#">Game Room</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#" aria-disabled="true" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/#">Action</a></li>
            <li><a className="dropdown-item" href="/#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 disabled" type="search" placeholder="Search game by name" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div className="row books" style={{ maxWidth:"100%", textalign:"center", marginLeft : "5%", marginTop : "30px"}}>


      <div className="col-lg-5">
  <table className="table table-striped table-bodered" style={{}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Game</th>
      <th scope="col">Unique players</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
   
   { gamesByUniqueUsers?.unique?.map((unique)=>{
    return(
      <tr>
      <td>{count1++}</td>
      <td>{unique.game}</td>
      <td>{unique.sum}</td>
      <td>{unique.genre}</td>
     </tr>
    )
  })} 
  </tbody>
  </table>

      </div>
      <div className="col-lg-5">
      <table className="table table-striped table-bodered" style={{}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Game</th>
      <th scope="col">Game Time</th>
      <th scope="col">Genre</th>
    </tr>
  </thead>
  <tbody>
   
   { gamesByPlaytime?.playtime?.map((unique)=>{
    return(
      <tr>
      <td>{count2++}</td>
      <td>{unique.game}</td>
      <td>{unique.sum}</td>
      <td>{unique.genre}</td>
     </tr>
    )
  })} 
  </tbody>
  </table>

      </div>


</div>

<div >
 

</div>
 


        </>
    );
}

export default Template;