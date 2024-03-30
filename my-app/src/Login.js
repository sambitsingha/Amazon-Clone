import React, { useState } from "react";
import "./Login.css";
import amazon from "./Images/amazon1.jpeg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { loginRedux } from './redux/userSlice'

function Login() {
  const [data, setData] = useState({
    
    email: "",
   
    password: "",
  });
   
  const navigate = useNavigate()

  const userData = useSelector(state => state)

    const dispatch = useDispatch()

  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {

      try{
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`,{
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
        dispatch(loginRedux(dataRes))

        setTimeout(() => {
          navigate("/")
        }, 500);
        console.log(userData) 
       }
       
      }catch(error){
        console.error("Error: ", error)
      }
    } else {
      alert("please enter required field")
    }
  }

  return (
    <div className="Login">
      <Link to="/">
        <img className="Login-logo" src={amazon} />
      </Link>
      <div className="Login-cont">
        <h1>Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            type={"text"}
            id="email"
            name="email"
            value={data.email}
            onChange={handleOnChange}
          />

          <h5>Password</h5>
          <input
            type={"password"}
            id="password"
            name="password"
            value={data.password}
            onChange={handleOnChange}
          />

          <button className="Login-signIn" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <Link to="/Signup">
          <button className="Login-register">Create your Amazon Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;