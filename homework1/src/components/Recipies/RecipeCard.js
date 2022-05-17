import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RecipeCard({recipe}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={recipe.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Name: {recipe.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
       </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {recipe.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}