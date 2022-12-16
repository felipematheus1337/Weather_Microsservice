import { Router } from 'express';
import RequestWeatherController from './controller/RequestWeatherController';

const weatherRouter = Router();
const requestWeatherController = new RequestWeatherController();


weatherRouter.get("/", requestWeatherController.getWeatherByLatAndLon);
weatherRouter.get("/custom",requestWeatherController.getWeatherByCityName)


export default weatherRouter;