import React from 'react';
import './index.css'
import search from './searchh.png'
import image from './image.png'
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'
import moment from 'moment';
 
const Home: React.FC = () => {

    const history = useHistory()

  function newTask(){
    history.push('/adicionar')
}

function newFilter(){
  history.push('/filtro')
}

    return(
        <div>
          <Header />
          <div id="divBusca">
          
            <img id='foto'src={search} alt="Buscar..."/>
            <input type="text" id="txtBusca" placeholder="Buscar..."/>
            <img id='filter' onClick={newFilter} src={image} alt="filter" />
            <button id="btnBusca" onClick={newTask}>ADICIONAR</button>
            
          </div>
        </div>
    ) 
}
 
export default Home;