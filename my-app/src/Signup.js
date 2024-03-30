import React, { useState } from "react";
import "./Signup.css";
import amazon from "./Images/amazon1.jpeg";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    city: "", // Add city to the initial state
    pincode: "" // Add pincode to the initial state
  });

  
  console.log(data)
  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((preve) =>{
        return{
            ...preve,
            [name] : value
        }
    })

  }
  console.log(process.env.REACT_APP_SERVER_DOMAIN)
  const handleSubmit = async(e) =>{

    e.preventDefault()
    const{name,email,number,password} = data
    if(name && email && password && number){
       const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`,{
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
       })
       const dataRes = await fetchData.json()
       console.log(dataRes)

       
        alert(dataRes.message)
        if(dataRes.alert){
          navigate("/Login")
        }
        
    }
    else{
        alert("please enter required field")
    }
  }
  return (
    <div className="Signup">
      <Link to="/">
        <img className="Login-logo" src={amazon} />
      </Link>
      <div className="Login-cont">
        <h1>Create account</h1>
        <form className="form-signup" onSubmit={handleSubmit}>
          <h5>Your Name</h5>
          <input
            type={"text"}
            id="name"
            name="name"
            placeholder="First and last name"
            value={data.name}
            onChange={handleOnChange}
          />
          <h5>E-mail</h5>
          <input
            type={"text"}
            id="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleOnChange}
          />
          <h5>Mobile number</h5>
          <input
            type={"number"}
            id="number"
            name="number"
            placeholder="Mobile number"
            value={data.number}
            onChange={handleOnChange}
          />

          <h5>Password</h5>
          <input
            type={"password"}
            id="password"
            name="password"
            placeholder="At least 6 characters"
            value={data.password}
            onChange={handleOnChange}
          />

<h5>City</h5>
          <input
            type={"text"}
            id="city"
            name="city"
            placeholder="your city"
            value={data.city}
            onChange={handleOnChange}
          />

<h5>PinCode</h5>
          <input
            type={"number"}
            id="pincode"
            name="pincode"
            placeholder="your city pincode"
            value={data.pincode}
            onChange={handleOnChange}
          />

          <button className="Login-signIn" type="submit">
            Create account
          </button>
        </form>
        <p>
          By creating an account or logging in, you agree to Amazon’s Conditions
          of Use and Privacy Policy.
        </p>

        <Link to="/Login">
          <button className="Login-page">Already have an account?</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;