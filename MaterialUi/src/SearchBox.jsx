import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import{ useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let[error, setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="bce54251f90d091c8e9ed4e9c4a886c5";


    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
       if (jsonResponse.cod != 200) {
    throw new Error("City not found");
}
        let result={
            city:jsonResponse.name,
            temp:jsonResponse.main.temp,
            temp_min:jsonResponse.main.temp_min,
            temp_max:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            
            weather:jsonResponse.weather[0].description,

        };
        console.log(result);
        return result;
        
    }catch (err) {
    throw err;
        }
};
    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async(event) => {
       try{
         event.preventDefault();
        console.log("City Name: ", city);
        setError(false);
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
        setCity("");
       }catch(err){
        setError(true);
       }
    };

    return (
        <div className="search-box">
         
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />

                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p> No such place Exits in our API!!</p>}
            </form>
        </div>
    );
}