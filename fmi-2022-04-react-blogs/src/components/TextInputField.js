import PropTypes from 'prop-types';
import React from 'react';
import { TextField } from '@mui/material';

const TextInputField = ({formik, field, label}) => {
  //if do not have label
  const {errors, touched, getFieldProps} = formik;
  label = label || field.charAt(0).toUpperCase() + field.slice(1);
  return (
    <div>
      <TextField
        fullWidth
        label={label}
        {...getFieldProps(field)}
        error={Boolean(touched[field] && errors[field])}
        helperText={touched[field] && errors[field]}
      />
    </div>
  )
}

TextInputField.propTypes = {
  formik: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default TextInputField;