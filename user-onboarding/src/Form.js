import React, { useState } from "react";
import "./Form.css";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email("Must be a vaild email address")
    .required("Must include email address"),
  password: yup.string().required("Must submit password"),
  terms: yup.boolean().oneOf([true], "Please agree to terms of use"),
});

function Form(props) {
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const validate = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);
    // let value =
      
    setFormState({ ...formState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value });
    console.log()
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        console.log(formState);
        setFormState(response.data);
      })
      .catch((err) => console.log(err));
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
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>
      <label className="password-form" htmlFor="password">
        Password:
        <input
          type="password"
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
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </form>
  );
}

export default Form;
