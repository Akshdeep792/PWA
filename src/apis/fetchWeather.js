import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "52a717e1b029ffa719415ea485fced34"

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY
        }
    })
    return data
}