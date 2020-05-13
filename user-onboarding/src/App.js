import React, {useState} from 'react';
import './App.css';
import Form from './Form'

function App() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    terms: false
  });

  const addUser = user => {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      terms: false
    }
    setUsers({...users, newUser})
  }

  return (
    <div className="App">
      <Form addUser = {addUser}/>
    </div>
  );
}

export default App;
