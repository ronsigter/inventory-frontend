import { useState } from 'react'

export const useAddInvoiceForm = (callback, defaultValues) => {
  const [values, setValues] = useState({ ...defaultValues })

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback(values);
  }

  const handleChange = (event) => {
    event.persist();
    setValues( values => ({ ...values, [event.target.name]: event.target.value}));
  }

  return {
    handleChange,
    handleSubmit,
    values
  }
}
