import React, {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from   '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../images/npslogo.jpg'


const Webcam = ({parkCode, full_name}) =>{
    const [image, setImage] = useState([]); 
    const API_KEY = 'QAjuTVVeaLghWPLMIAYk6cibYmCUywJPBDPZtUda';
    
    const getImage = async () => {
        const res = await fetch(`https://developer.nps.gov/api/v1/activities/webcams?parkCode=${parkCode}&api_key=${API_KEY}`); 
        if (res.status === 429){
            window.location.reload();
        } else {
            const jsonResponse = await res.json(); 
            setImage(jsonResponse.data)
            console.log(jsonResponse.data)
        }

    }
    useEffect(() => {
        getImage(); 
    }, [])


    return (
        <div className="web">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        // src={`${image.data.images.url}`}
        src={`${image}`}
        alt="NPS"
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
      </CardActions>
    </Card> 
    </div>
    );
           

}


export default Webcam