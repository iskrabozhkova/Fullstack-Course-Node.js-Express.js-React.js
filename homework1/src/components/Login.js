import React, {useState} from 'react'
import {Avatar, Button , TextField, MenuItem, Select, FormControl, InputLabel, Link, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '../components/Menu'

export default function Login({onLogin}) {
  const theme = createTheme();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  function submitLogin(event){
    event.preventDefault();
      onLogin({username,password});
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Menu/>
        <form className="form-container" onSubmit={submitLogin}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#3F51B5' }}/>
            <Typography component="h1" variant="h5">Login</Typography>
            <Box  sx={{ mt: 3, width: '30%'}}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </Grid>
        
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>
               </Grid>
            
              <Button 
              color="primary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login 
              </Button>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}
