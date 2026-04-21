import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState} from "react";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]= useState({
            city: "Bangalore",
            feels_like: 24.84,
            temp: 25.56,
            temp_max: 26.11,
            temp_min: 24.44,
            humidity: 78,
            weather: "clear sky"
        });


        let updateInfo=(newInfo)=>{
            setWeatherInfo(newInfo);
        }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Atharva</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}