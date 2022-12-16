import { Request, Response } from 'express';
import { IRequestWeather } from '../domain/IRequestWeather';
import RequestWeatherService from '../service/RequestWeatherService';


class RequestWeatherController {

    public async getWeatherByLatAndLon(request: Request, response: Response):Promise<Response> {
        const requestWeatherService = RequestWeatherService;

        const { lat, lon } = request.body as IRequestWeather;
        
        const weather = await requestWeatherService.getWeather({lat:Number(lat),lon:Number(lon)});

        return response.json(weather);
    }

    public async getWeatherByCityName(request: Request, response: Response): Promise<Response> {
        const { city } = request.body;

        return response.json('');
        
    }

}



export default RequestWeatherController;