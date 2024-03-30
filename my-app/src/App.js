import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Signup from "./Signup";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from "./Electronics";
import Laptops from "./Laptops";
import Laptopfirst from "./Laptopfirst";
import Laptopsecond from "./Laptopsecond";
import Laptopthird from "./Laptopthird";
import Laptopfourth from "./Laptopfourth";
import Laptopfifth from "./Laptopfifth";
import Smartghadi from "./Smartghadi";
import Appleone from "./Appleone";
import Noiseone from "./Noiseone";
import Boatwatch from "./Boatwatch";
import Samsungwatch from "./Samsungwatch";
import Fastrack from "./Fastrack";
import Headphones from "./Headphones";
import Headphonesfirst from "./Headphonesfirst";
import Headphonessecond from "./Headphonessecond";
import Headphonesthird from "./Headphonesthird";
import Headphonesfourth from "./Headphonefourth";
import Headphonesfifth from "./Headphonesfifth";
import Accessories from "./Accessories";
import Gaming from "./Gaming";
import Cameras from "./Cameras";
import Tablets from "./Tablets";
import Homeaudio from "./Homeaudio";
import Women from "./Women";
import Womenone from "./Womenone";
import Womentwo from "./Womentwo";
import Womenthree from "./Womenthree";
import Womenfour from "./Womenfour";
import Men from "./Men";
import Menone from "./Menone";
import Mentwo from "./Mentwo";
import Menthree from "./Menthree";
import Menfour from "./Menfour";
// payment part
import React from 'react';
import PaymentForm from "./PaymentForm";
// import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPayment from './CheckoutPayment';

const stripePromise = loadStripe(
  "pk_test_51OpwncSIqwPq4QBpiAw4TgUd0Brp3o4XMPk26uWvyGjVFukH3r5UcP2tUmb2CwHpOejA1dDrgtJs9GcUWl7ktvlG00eYuWVVFM"
);

function App() {
  return (
   
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Electronics" element={<Electronics />}></Route>
          <Route path="/Laptops" element={<Laptops />}></Route>
          <Route path="/Laptopfirst" element={<Laptopfirst />}></Route>
          <Route path="/Laptopsecond" element={<Laptopsecond />}></Route>
          <Route path="/Laptopthird" element={<Laptopthird />}></Route>
          <Route path="/Laptopfourth" element={<Laptopfourth />}></Route>
          <Route path="/Laptopfifth" element={<Laptopfifth />}></Route>
          <Route path="/Smartghadi" element={<Smartghadi />}></Route>
          <Route path="/Appleone" element={<Appleone />}></Route>
          <Route path="/Noiseone" element={<Noiseone />}></Route>
          <Route path="Boatwatch" element={<Boatwatch />}></Route>
          <Route path="Samsungwatch" element={<Samsungwatch />}></Route>
          <Route path="Fastrack" element={<Fastrack />}></Route>
          <Route path="Headphones" element={<Headphones />}></Route>
          <Route path="Headphonesfirst" element={<Headphonesfirst />}></Route>
          <Route path="Headphonessecond" element={<Headphonessecond />}></Route>
          <Route path="Headphonesthird" element={<Headphonesthird />}></Route>
          <Route path="Headphonesfourth" element={<Headphonesfourth />}></Route>
          <Route path="headphonesfifth" element={<Headphonesfifth />}></Route>
          <Route path="Accessories" element={<Accessories />}></Route>
          <Route path="Gaming" element={<Gaming />}></Route>
          <Route path="Cameras" element={<Cameras />}></Route>
          <Route path="Tablets" element={<Tablets />}></Route>
          <Route path="Homeaudio" element={<Homeaudio />}></Route>
          <Route path="/CheckoutPayment" element= {<CheckoutPayment/>}></Route>   
          <Route path="/Women" element= {<Women/>}></Route>  
          <Route path="/Womenone" element= {<Womenone/>}></Route>  
          <Route path="/Womentwo" element= {<Womentwo/>}></Route>  
          <Route path="/Womenthree" element= {<Womenthree/>}></Route> 
          <Route path="/Womenfour" element= {<Womenfour/>}></Route> 
          <Route path="/Men" element= {<Men/>}></Route> 
          <Route path="/Menone" element= {<Menone/>}></Route> 
          <Route path="/Mentwo" element= {<Mentwo/>}></Route> 
          <Route path="/Menthree" element= {<Menthree/>}></Route> 
          <Route path="/Menfour" element= {<Menfour/>}></Route> 
        </Routes>

        {/* <Elements stripe={stripePromise}>
        <PaymentForm />
        </Elements> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
