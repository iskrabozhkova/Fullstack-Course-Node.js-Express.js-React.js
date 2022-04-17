import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, FormControlLabel, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import { min } from 'lodash';
import TextInputField from '../../../components/TextInputField';

// ----------------------------------------------------------------------

export default function BlogPostForm({post, onAddPost}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    title: Yup.string()
    .min(2, 'Too Short-should be at least 2 characters long!')
    .max(50, 'Too Long - should be maximum 50 characters long!')
    .required('Title is required'),
    content: Yup.string()
    .min(10, 'Too Short-should be at least 10 characters long!')
    .max(2048, 'Too Long - should be maximum 2048 characters long!')
    .required('Content is required'),
    tags: Yup.string().matches(/[\w\s,]+/, {excludeEmptyString: true})
    .min(2, 'Too Short-should be at least 2 characters long!')
    .max(50, 'Too Long - should be maximum 50 characters long!'),
    imageUrl: Yup.string().url('Should be a valid url')
    .required('ImageUrl is required')
  });

  const formik = useFormik({
    initialValues: {
      id: post.id || '',
      title: post.title || '',
      content: post.content || '',
      tags: post.tags || '',
      imageUrl: post.imageUrl || '',
      active: post.active || true,
    },
    validationSchema: RegisterSchema,
    onSubmit: post => {
      post.tags = post.tags.trim().split(',').map(tag => tag.trim());
      onAddPost(post);
      navigate('/dashboard/blogs');
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField
              fullWidth
              label="ID"
              {...getFieldProps('id')}
              disabled={true}
            />
          <TextInputField formik={formik} field='title'/>
          <TextInputField formik={formik} field='content'/>
          <TextInputField formik={formik} field='tags'/>
          <FormControlLabel control={<Checkbox {...getFieldProps('active')} />} label="Active"/>
          <TextInputField formik={formik} field='imageUrl'/>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Add blog
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
