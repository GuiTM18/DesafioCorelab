import { Router, request, response, Request, Response} from 'express'
 
import { getCars } from './controller/CarController';
import { saveCar } from './controller/CarController';
import { getCar } from './controller/CarController';
import { updateCar } from './controller/CarController';
import { deleteCar } from './controller/CarController';
import { finishedCar } from './controller/CarController';
 
const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' })
})
 
routes.get('/Cars', getCars)
routes.post('/Cars', saveCar)
routes.get('/Cars/:id', getCar)
routes.put('/Cars/:id', updateCar)
routes.delete('/Cars/:id', deleteCar)
routes.patch('/Cars/:id', finishedCar)
 
export default routes