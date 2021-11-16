import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from   '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../images/npslogo.jpg'


const ParkCards = ({parkCode, full_name, parkURL, activity, states}) =>{
    const [parkIn, setParks] = useState([]); 
    const API_KEY = 'QAjuTVVeaLghWPLMIAYk6cibYmCUywJPBDPZtUda';
    
    const getPark = async () => {
        const res = await fetch(`https://developer.nps.gov/api/v1/activities/parks?q=${activity}&api_key=${API_KEY}`); 
        if (res.status === 429){
            window.location.reload();
        } else {
            const jsonResponse = await res.json(); 
            setParks(jsonResponse.data)
            console.log(jsonResponse.data)
        }

    }
    useEffect(() => {
        getPark(); 
    }, [])

   

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={logo}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Park Name : {full_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Park Code: {parkCode}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" target="_blank" href={`${parkURL}`}>Learn More</Button>
      </CardActions>
    </Card>
    );
            

}


export default ParkCards