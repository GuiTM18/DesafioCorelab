import { getRepository } from "typeorm";
import { Cars } from '../entity/Car';
import { Request, Response } from "express";
 
export const getCars = async(request: Request, response: Response) => {
    const cars = await getRepository(Cars).find()
    return response.json(cars);
};
 
export const saveCar = async(request: Request, response: Response) => {
    const car = await getRepository(Cars).save(request.body)
    return response.json(car);
};
 
export const getCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Cars).findOne(id)
    return response.json(car);
};
 
export const updateCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Cars).update(id, request.body)
 
    if (car.affected == 1){
        const carUpdated = await getRepository(Cars).findOne(id)
        return response.json(carUpdated);
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
 
export const deleteCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Cars).delete(id)
 
    if (car.affected == 1){
        return response.status(200).json( {message: "Tarefa excluída com sucesso!"} );
    }
    else{
        return response.status(404).json( {message: 'Tarefa não encontrada!'} )
    }
};
 
export const finishedCar = async(request: Request, response: Response) => {
    const {id} = request.params
    const car = await getRepository(Cars).update(id, {
        finished: true,
    })
 
    if (car.affected == 1){
        const carFinished = await getRepository(Cars).findOne(id)
        return response.json(carFinished);
    }
    else{
        return response.status(404).json( {message: 'Carro não encontrado!'} )
    }
};