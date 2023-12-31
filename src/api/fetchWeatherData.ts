import axios from "axios";
import { Weather } from "../types";
const key = "";

export const fetchWeatherData = async (city: string): Promise<Weather | null> =>  {
    let response: any = null;
    try {
      response = await axios.get<Weather>(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=3&aqi=no&alerts=no`
      );
      
    } catch (error:any) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
    return response.data;
  };