import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import {Button , TextField, Grid, Typography, Box} from '@mui/material/'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '../../components/Menu'
import { useFormik, Form, FormikProvider } from 'formik';
import * as Yup from 'yup';

export default function EditRecipe({onEditRecipe}) {
  const theme = createTheme();
  const {id} = useParams();
  const lastUserId = id.substring(1);
  
  const RecipeSchema = Yup.object().shape({
    id: Yup.string()
      .max(24, 'Too Long!'),
    name: Yup.string().max(80, 'Too Long!'),
    shortDescription: Yup.string().max(256, 'Too Long!'),
    prepareTime: Yup.number().min(0).max(60),
    products: Yup.string(),
    photo: Yup.string(),
    tags: Yup.string(),
    longDescription: Yup.string().max(2048, 'Too Long!')
  });

  const formik = useFormik({
    initialValues: {
      id: lastUserId,
      name: '',
      shortDescription: '',
      prepareTime: '',
      products: '',
      photo: '',
      tags: '',
      longDescription: '',
      creationDate: ''
    },
    validationSchema: RecipeSchema,
    onSubmit: ({id, name,shortDescription,prepareTime,products, photo,tags,longDescription}) => {
      const creationDate = new Date();
      formik.setFieldValue('creationDate', creationDate);
      onEditRecipe({id, name,shortDescription,prepareTime,products, photo,tags,longDescription, creationDate});
    }
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <div>
    <FormikProvider value={formik}>
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
            <Typography component="h1" variant="h5">Edit recipe</Typography>
            <Box  sx={{ mt: 3, width: '50%' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={formik.values.name}
                    onChange={formik.handleChange}
                      {...getFieldProps('name')}
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="shortDescription"
                    label="shortDescription"
                    name="shortDescription"
                    value={formik.values.shortDescription}
                    onChange={formik.handleChange}
                    {...getFieldProps('shortDescription')}
                    error={Boolean(touched.shortDescription && errors.shortDescription)}
                    helperText={touched.shortDescription && errors.shortDescription}
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="longDescription"
                  label="longDescription"
                  name="longDescription"
                  value={formik.values.longDescription}
                    onChange={formik.handleChange}
                  {...getFieldProps('longDescription')}
                  error={Boolean(touched.longDescription && errors.longDescription)}
                  helperText={touched.longDescription && errors.longDescription}
                />
              </Grid>
        
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="prepareTime"
                    label="prepareTime"
                    type="text"
                    id="prepareTime"
                    value={formik.values.prepareTime}
                    onChange={formik.handleChange}
                    {...getFieldProps('prepareTime')}
                  error={Boolean(touched.prepareTime && errors.prepareTime)}
                  helperText={touched.prepareTime && errors.prepareTime}
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
                  name="products"
                  label="products"
                  type="text"
                  id="products"
                  value={formik.values.products}
                    onChange={formik.handleChange}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="tags"
                  label="tags"
                  type="text"
                  id="tags"
                  value={formik.values.tags}
                    onChange={formik.handleChange}
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
                Add recipe
              </Button>
            </Box>
          </Box>
        </form>
      </ThemeProvider>
      </FormikProvider>
    </div>
  )
}