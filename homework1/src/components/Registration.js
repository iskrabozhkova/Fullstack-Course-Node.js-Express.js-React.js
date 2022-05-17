import React, {useState} from 'react'
import {Avatar, Button , TextField, MenuItem, Select, FormControl, InputLabel, Link, Grid, Typography, Box, Container} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '../components/Menu'
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

export default function Registration({onRegister}) {
  const theme = createTheme();

  const UserSchema = Yup.object().shape({
    id: Yup.string()
      .max(24, 'Too Long!'),
    name: Yup.string(),
    username: Yup.string().max(15, 'Too Long!'),
    password: Yup.string().min(8, 'Too Short!'),
    sex: Yup.string(),
    role: Yup.string().matches(/^(admin|user)$/, "Only user and admin is allowed!"),
    photo:  Yup.string(),
    description: Yup.string().max(512, 'Too Long!'),
    status: Yup.string().matches(/^(active|suspended|deactivated)$/, "Only active, suspended and deactivated status is allowed!"),
  })

  const formik = useFormik({
    initialValues: {
      id: 1,
      name: '',
      username: '',
      sex: '',
      password: '',
      role: '',
      photo: '',
      description: '',
      status: '',
      creationDate: ''
    },
    validationSchema: UserSchema,
    onSubmit: ({id, name, username, sex,password, role,photo,description,status}) => {
      const creationDate = new Date();
      formik.setFieldValue('id', id+1);
      formik.setFieldValue('creationDate', creationDate);
      onRegister({id, name, username, sex,password, role,photo,description,status,creationDate});
    }
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Menu/>
        <form className="form-container" onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#3F51B5' }}/>
            <Typography component="h1" variant="h5">Register</Typography>
            <Box  sx={{ mt: 3, width: '60%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    {...getFieldProps('username')}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
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
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    {...getFieldProps('password')}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="photo"
                  label="photo"
                  type="text"
                  id="photo"
                  value={formik.values.photo}
                    onChange={formik.handleChange}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="sex"
                  label="sex"
                  type="text"
                  id="sex"
                  value={formik.values.sex}
                    onChange={formik.handleChange}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="description"
                  type="text"
                  id="description"
                  value={formik.values.description}
                    onChange={formik.handleChange}
                  {...getFieldProps('description')}
                  error={Boolean(touched.description && errors.description)}
                  helperText={touched.description && errors.description}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="role"
                  label="role"
                  type="text"
                  id="role"
                  value={formik.values.role}
                    onChange={formik.handleChange}
                  {...getFieldProps('role')}
                  error={Boolean(touched.role && errors.role)}
                  helperText={touched.role && errors.role}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="status"
                  label="status"
                  type="text"
                  id="status"
                  value={formik.values.status}
                    onChange={formik.handleChange}
                  {...getFieldProps('status')}
                  error={Boolean(touched.status && errors.status)}
                  helperText={touched.status && errors.status}
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
                Register
              </Button>
              <Grid>
              </Grid>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
    </div>
  )
}
