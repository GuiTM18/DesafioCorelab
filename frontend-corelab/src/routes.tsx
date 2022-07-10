import React from 'react';
import {Switch, Route} from 'react-router-dom'
 
import Cars from './pages/Vehicles';
import Home from './pages/Home'
import Adicionar from './pages/Adicionar'
import Filtro from './pages/Filtro'
 
const Routes: React.FC = () => {
    return(
        <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/adicionar" exact component={Adicionar} />
            <Route path="/exibir" exact component={Cars} />
            <Route path="/filtro" exact component={Filtro} />
           
        </Switch>
    );
}
 
export default Routes;