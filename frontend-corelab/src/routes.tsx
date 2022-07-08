import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Vehicle from './pages/Vehicles';

 
const Routes: React.FC = () => {
    return(
        <Switch>
            
            <Route path="/" exact component={Vehicle} />
           
        </Switch>
    );
}
 
export default Routes;