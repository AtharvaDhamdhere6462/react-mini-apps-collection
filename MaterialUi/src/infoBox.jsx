import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1621260938401-7bdad0aec8fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
   const HOT_URL="https://plus.unsplash.com/premium_photo-1699534957345-21ec96f6fad2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFqZXN0aGFufGVufDB8fDB8fHww";
   const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL = "https://plus.unsplash.com/premium_photo-1709310749399-fc68800e1c76?w=500&auto=format&fit=crop&q=60";
    return(
        <div className="info-box">
            
           
            <div className="cardContainer">

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? RAIN_URL : info.temp >15 ? HOT_URL:COLD_URL
        }

      title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature: {info.temp}°C</p>
          <p>Humidity: {info.humidity}% </p>
          <p>Max Temperature: {info.temp_max}°C</p>
          <p>Min Temperature: {info.temp_min}°C</p>
            <p>The Weather can be described as: 
        <b><i>
                {info.weather}</i></b> and 
            Feels Like: {info.feels_like}°C</p>
        </Typography>
      </CardContent>
      
    </Card>

            </div>
             
        </div>
    );

    }