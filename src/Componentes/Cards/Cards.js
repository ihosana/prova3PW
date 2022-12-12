
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Pokemon from '../../Paginas/Pokemon';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

export default function Cards({name ,url,image}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image='' alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {name}     
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {url}
        </Typography>
      </CardContent>
      <CardActions>
        {image}
      
        <Button size="small"><Link to ="/Pokemon"  >Ler Mais </Link> </Button>
       
      </CardActions>
    </Card>

);
}