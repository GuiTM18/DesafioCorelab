import React from 'react';
import './index.css'
import search from './searchh.png'
import image from './image.png'
 
const Home: React.FC = () => {
    return(
        
        <div id="divBusca">
          <img id='foto'src={search} alt="Buscar..."/>
          <input type="text" id="txtBusca" placeholder="Buscar..."/>
          <img id='filter' src={image} alt="filter" />
          <button id="btnBusca">ADICIONAR</button>
          

        </div>
    ) 
}
 
export default Home;