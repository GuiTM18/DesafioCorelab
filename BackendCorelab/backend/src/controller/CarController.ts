import { getRepository } from "typeorm";
import { Car } from '../entity/Car';
import { Request, Response } from "express";
 
export const getCars = async(request: Request, response: Response) => {
    const cars = await getRepository(Car).find()
    return response.json(cars);
};
 
export const saveCar = async(request: Request, response: Response) => {
    const car = await getRepository(Car).save(request.body)
    return response.json(car);
};
 
export const getCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Car).findOne(id)
    return response.json(car);
};
 
export const updateCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Car).update(id, request.body)
 
    if (car.affected == 1){
        const carUpdated = await getRepository(Car).findOne(id)
        return response.json(carUpdated);
    }
    else{
        return response.status(404).json( {message: 'Carro não encontrado!'} )
    }
};
 
export const deleteCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Car).delete(id)
 
    if (car.affected == 1){
        return response.status(200).json( {message: "Carro excluído com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Carro não encontrado!'} )
    }
};
 
export const finishedCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Car).update(id, {
        finished: true,
    })
 
    if (car.affected == 1){
        const carFinished = await getRepository(Car).findOne(id)
        return response.json(carFinished);
    }
    else{
        return response.status(404).json( {message: 'Carro não encontrado!'} )
    }
};