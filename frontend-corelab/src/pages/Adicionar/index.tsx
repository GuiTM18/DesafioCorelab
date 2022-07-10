import React, { useState, ChangeEvent } from 'react';
import './index.css'
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import Arrow from '../../components/Arrow'

const Adicionar: React.FC = () => {

    const history = useHistory()

    interface ICar{
        
        nome: string;
        marca: string;
        cor: string;
        ano: number;
        preco: number;
        description: string;
        
    }

    const [model, setModel] = useState<ICar>({
       
        nome: '',
        marca: '',
        cor: '',
        ano: 0,
        preco: 0,
        description: '',
       
    })
 
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }
 
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        
        const response = await api.post('/Cars', model)
 
        console.log(response)
    }

    function back(){
        history.goBack()
    }


    return(
        
        <div  >
            <Arrow/>
        <form id='area' onSubmit={onSubmit}>
           <h3>Nome:</h3>
           <input type="text" id='input'
                            name="nome"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> 

           <h3>Marca:</h3> 
           <input type="text" id='input'  
                            name="marca"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3>Cor:</h3> 
           <input type="text" id='input'
                            name="cor"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3>Ano:</h3> 
           <input type="text" id='inputA'
                            name="ano"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3 id='HA'>Preço:</h3>
           <input type="text" id='inputB'
                            name="preco"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>

           <h3 id='HB'>Descrição:</h3> 
           <input type="text" id='desc'
                            name="description"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/> 

           <button type='submit'>SALVAR</button>
           </form>
        </div>
    )
}

export default Adicionar