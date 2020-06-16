import React, { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      terms: false,
    };
    setUsers([...users, newUser]);
  };
  console.log(users);
  return (
    <div className="App">
      <Form addUser={addUser} formUsers={users} />
    </div>
  );
}

export default App;
