import React, { useState } from 'react';
import Form from './components/Form'
const initialFormValues = {
  name: 'Shane',
  email: '',
  password: '',
  tos: true
}

function App() {

  const [forumValues, setForumValues] = useState(initialFormValues)
  return <Form values={forumValues}/>;
}

export default App;
