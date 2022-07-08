import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';
 
interface ICar{
    id: number;
    marca: string;
    preco: number;
    cor: string;
    description: string;
    finished: boolean;
}
 
const Cars: React.FC = () => {
 
    const [cars, setCars] = useState<ICar[]>([])
 
    useEffect(() => {
        loadCars()
    }, [])
 
   
    async function loadCars() {
      const response = await api.get('/Cars')
      console.log(response);
      setCars(response.data)
  }

  function formatDate(date: Date){
      return moment(date).format('DD/MM/YYYY')
  }

  return (
      
      <div className="container">
          <br />
          <table>
              <tbody>
                  {
                      cars.map(car => (
                          <tr key={car.id}>

                          <td>MARCA 
                              <td>{car.marca}</td> 
                          </td>

                          <td>PREÇO
                              <td>{car.preco}</td>
                          </td> 

                          <td>COR
                              <td>{car.cor}</td> 
                          </td> 

                          <td>DESCRIÇÕES
                            <td>{car.description}</td>
                          </td> 

                          <td>Status
                            <td>{car.finished ? "Reservado" : "Disponível"}</td>
                          </td>

                              <td>
                                  <Button size="sm" variant="primary">Editar</Button>{' '}
                                  <Button size="sm" variant="success">Finalizar</Button>{' '}
                                  <Button size="sm" variant="warning">Visualizar</Button>{' '}
                                  <Button size="sm" variant="danger">Remover</Button>{' '}
                              </td>

                          </tr>
                      ))
                   }
              </tbody>
          </table>
      </div>
  );
}

export default Cars;
