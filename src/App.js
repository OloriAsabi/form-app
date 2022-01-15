import { useState } from "react";
import './App.css';
import FormInput from "./components/FormInput";

function App() {
  const [values,setValues] = useState({
    username: " ",
    email: "",
    dateOfBirth:"",
    password:"",
    confirmPassword:"",
  });
 
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      required: true,
    },
    {
      id:3,
      name:"dateOfBirth",
      type:"date",
      placeholder:"Date Of Birth",
      label:"Date Of Birth",
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label:"Password",
      pattern: "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,20}$",
      required: true,
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",  
      errorMessage: "Passwords dont match",
      label:"Confirm Password",
      pattern: values.password,
      required: true,
    }
  ]

   const handleSubmit = (e) => {
     e.preventDefault();   
   }

   const onChange = (e) => {
     setValues({...values, [e.target.name]: e.target.value });
   }

   console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
        <FormInput 
        key={input.id} 
        {...input} 
        value={values[input.name]}
        onChange={onChange}
        /> 
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
