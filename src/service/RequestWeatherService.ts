import 'dotenv';
import { IRequestWeather } from "../domain/IRequestWeather";
import axios from 'axios';

class RequestWeatherService {
    
    async getWeather(data: IRequestWeather) {
        let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${process.env.API_KEY}`
        console.log(BASE_URL)
        const result = await (await axios.get(BASE_URL)).data;
        const weather = {
            estado: result.weather[0].main,
            description: result.weather[0].description,
            icon: `http://openweathermap.org/img/w/${result.weather[0].icon}.png`,
            temperatura: (result.main.temp - 273.15).toFixed(2),
            temperaturaMin: (result.main.temp_min - 273.15).toFixed(2),
            temperaturaMax: (result.main.temp_max - 273.15).toFixed(2),
            humidade: result.main.humidity,
            vento: result.wind.speed,
            data: new Date(result.dt * 1000),
            pais: result.sys.country,
            cidade: result.name
        }
        return weather;
    }
}


export default new RequestWeatherService();