import './App.css';
import React, {useState, useEffect} from 'react';
import { uzeGet } from './customhooks/crudhook.js';
import {Bar, Pie} from 'react-chartjs-2';
import Template from './Template'


function App() {
  //const Template = Template();
  const state = {}



  return (
    <>
    <Template />

{/* <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />

<Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  */}
     
    </>
      
  );
}

export default App;
