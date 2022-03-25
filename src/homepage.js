import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
//import {useGet, useGetOne, usePatch} from './customhooks/crudhook'
import { API_PATH, header, URL_PATH} from './config.js'
import "./css/app.css"
import { Link, NavLink, Route } from 'react-router-dom';
//import { Routes } from './routes'
import swal from 'sweetalert'
import { uzeGet } from './customhooks/crudhook.js';
import Template from './Template.js';




export default function LoadGames(){
   
    const [games, setGames] = useState(null)
        useEffect( () => {
            console.log('...')
            uzeGet(API_PATH, '/?search=null', header, setGames);
            console.log('games are', games)
     }, );
  
    return (
        <>
        <div className="container" style={{ marginTop : "10%", textAlign:"center" }}>
            
           <center> 
               <div className="alert-light row" style={{ maxWidth: "1100px", padding: "20px", textAlign: "center", border: "0.5px solid lightgrey", borderRadius:"12px" }}>
                    {games.map((game)=>{
                        return(
                        <div className="col-lg-3"> 
                           <span>game: {game.game}</span>
                        </div>)
                    })}

                    

               </div> 
        
            </center>
        </div>
        </>
    )
}