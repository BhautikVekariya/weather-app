import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from 'react';
export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike: 41.96,
        humidity: 59,
        pressure: 1003,
        temp: 4.96,
        tempMax: 34.96,
        tempMin: 34.05,
        weather: "haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
            <div>
                <h1>weather App  </h1>
                <SearchBox updateInfo={updateInfo}/>
                <InfoBox info={weatherInfo}/>
            </div>
    )
}