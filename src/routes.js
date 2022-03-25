import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  Template  from './Template'
export function Routes(){
return(
    <Router>
    <Route path="/" component={Template} exact={true} />
   
    </Router>
)
}

