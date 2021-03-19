import React from 'react';
import './App.css';
import User from './Pages/User'
import Poke from './Pages/Poke'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter,
  Switch,
  Route 
  
} from 'react-router-dom'

import Header from './Header/Header'

const  App:React.FC =() => {
  return (

    <BrowserRouter> 
    <Header/>
         <Switch>
     
           <Route exact path="/" /> 
           <Route path="/User" component={User} />
           <Route path="/Poke" component={Poke}/>
                  
         </Switch>
    
    </BrowserRouter>

  )
}
export default App
