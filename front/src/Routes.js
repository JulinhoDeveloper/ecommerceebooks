import React from "react";

import {  BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./user/Login"
import Registro from "./user/Registro"
import Home from "./core/Home"


const Routes = () =>{
     return (
         <BrowserRouter>
         <Switch>
         <Route path="/" exact component={Home}/>
             <Route path="/login" exact component={Login}/>
             <Route path="/registro" exact component={Registro}/>
         </Switch>
         </BrowserRouter>
     )
}

export default Routes;