import React from 'react'
import Arrow from '../../components/Arrow'


const Filtro: React.FC = () => {
    return(
        <div>
            <Arrow/>
            <div id='area'>

            
           <h3>Nome:</h3>
           <input type="text" id='input'/> 

           <h3>Marca:</h3> 
           <input type="text" id='input'/>

           <h3>Cor:</h3> 
           <input type="text" id='input'/>

           <h3>Ano:</h3> 
           <input type="text" id='input'/>

           <h3>Descrição:</h3> 
           <input type="text" id='desc'/> 

           <button>SALVAR</button>

        </div>
        </div>
        
    )
}

export default Filtro