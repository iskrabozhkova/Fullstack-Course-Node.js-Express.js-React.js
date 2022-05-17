// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function User({user}) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={user.photo}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//          Name: {user.name}
//         </Typography>
//         <Typography gutterBottom variant="h5" component="div">
//         Username: {user.username}
//        </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Description: {user.description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Edit</Button>
//         <Button size="small">Delete</Button>
//       </CardActions>
//     </Card>
//   );
// }

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom";

export default function User({user, onRemoveUser}) {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/registration`; 
    navigate(path);
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Username:"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {user.username}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Button onClick={routeChange}>Edit</Button>
      <Button onClick={() => onRemoveUser(user)}>Delete</Button>
      <Divider/>
    </List>
  );
}