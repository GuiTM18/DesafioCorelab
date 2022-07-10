import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Cars from './pages/Vehicles';
import Home from './pages/Home'
 
const Routes: React.FC = () => {
    return(
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/exibir" exact component={Cars} />
           
        </Switch>
    );
}
 
export default Routes;