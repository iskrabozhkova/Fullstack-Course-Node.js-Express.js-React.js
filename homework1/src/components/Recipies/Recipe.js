import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

export default function RecipeCard({recipe, onRemoveRecipe}) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/recipies/new/:${recipe.id}`; 
    navigate(path);
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Recipe name:"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {recipe.name}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Button onClick={routeChange}>Edit</Button>
      <Button onClick={() => onRemoveRecipe(recipe)}>Delete</Button>
      <Divider/>
    </List>
  );
}