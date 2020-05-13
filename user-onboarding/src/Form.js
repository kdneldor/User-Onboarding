import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  const inputChange = (e) => {
    console.log("input changed!", e.target.value, e.target.checked);
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <form className="input-form" onSubmit={formSubmit}>
      <label className="name-form" htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formState.name}
          onChange={inputChange}
        ></input>
      </label>
      <label className="email-form" htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formState.email}
          onChange={inputChange}
        ></input>
      </label>
      <label className="password-form" htmlFor="password">
        Password:
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          value={formState.password}
          onChange={inputChange}
        ></input>
      </label>
      <label htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms and Conditions
      </label>
      <button className="form-button">Submit</button>
    </form>
  );
}

export default Form;
