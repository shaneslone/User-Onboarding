import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import axios from 'axios'
import schema from './validation/formSchema'
import * as yup from 'yup'

function App() {
  
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false
  }
  const initialFormErrors = {
    username: "",
    email: "",
    role: "",
    civil: "",
  };
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [users, setUsers] = useState([])
  const [disabled, setDisabled] = useState(true)
    
  const formChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    axios.post('https://reqres.in/api/users', newPerson)
          .then(res => {
            console.log(res)
            setUsers([...users, JSON.stringify(res.data)])
            setFormValues(initialFormValues)
          })
          .catch(err => {
            debugger
          })

  }
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
  <>
  {users.map(user => <p>{user}</p>)}
  <Form values={formValues} change={formChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
  </>
  )
}

export default App;
