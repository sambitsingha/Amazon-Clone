import React, { useState } from "react";
import "./Header.css";
import amazon from "./Images/amazonlogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import india from "./Images/india.jpeg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { logoutRedux } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [{ basket }] = useStateValue();
  const userData = useSelector((state) => state.users);
  console.log(userData);
  const dispatch = useDispatch();
  // State for showing the menu or not
  const [showCategories, setShowCategories] = useState(false);

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  //handle login logout
  const [ShowLoginOut, hideLoginOut] = useState(false);
  const handleLoginOut = () => {
    hideLoginOut((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux())
  }

  return (
    // HEADER
    <div className="main-header">
      <div className="header-1">
        <Link to="/">
          <img className="amazonimg" src={amazon} alt="" />
        </Link>

        {/* <div className="location">
          <LocationOnIcon className="locate-icon" />
          <div className="location-span">
            {userData ? (<span className="topline">{userData.city}</span>) :
            (<span className="topline">Delivering Address</span>)}
            {userData.pincode ? (<span className="bottomline">{userData.pincode}</span>) : (<span className="bottomline">Pincode</span>)}

          </div>
        </div>

        <div className="header_search">
          <input
            className="header_searchInput"
            placeholder="Search Amazon.in"
            type="text"
          />
          <SearchIcon className="searchicon" />
        </div>
        <div className="header_nav">
          <div className="language">
            <img className="indiaimg" src={india} alt="" />
            <span className="country">EN</span>
          </div>
          <Link to="/Login">
            <div className="header_option" onClick={handleLoginOut}>
              {userData.name ? (
                <span className="header_optionLineOne">
                  {"Hello " + userData.name}
                </span>
              ) : (
                <span className="header_optionLineOne">Hello, Sign in</span>
              )}
              <span className="header_optionLineTwo">Account & Lists</span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>

          <Link to="/checkout">
            <div className="cart">
              <ShoppingCartIcon
                sx={{ fontSize: 35 }}
                className="ShoppingCartI"
              />
              <span className="cart">Cart {basket?.length}</span>
            </div>
          </Link>
        </div>
      </div> */}
      <div className="nav-option2">
          <LocationOnIcon />
          <div className="location-nav" >
          {userData.name ? (
            <span className="option-line1">{"Deliver to " + userData.name}</span>
          ) :(
            <span className="option-line1">Delivery address</span>
          )}
          {userData.city ? (
             <span className="option-line2">{ userData.city + " "+ userData.pincode}</span>
          ) : (
            <span className="option-line2">City & PinCode</span>
          )}
            </div>
        </div>
        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>
        <div className="header-nav">
          <div className="nav-option3">
            <img className="Flag-img" src={india} />
            <span className="language">EN</span>
          </div>
          {/* {showLanguage && (
            <div className="language-cont">
              <span>English</span>
              <span>English</span>
              <span>English</span>
              <span>English</span>
              <span>English</span>
            </div>
          )} */}
         
            <div className="nav-option" onClick={handleLoginOut}>
              {userData.name ? (
                <span className="option-line1">{"Hello " + userData.name}</span>
              ) : (
                <span className="option-line1">Hello, Sign in</span>
              )}
              <span className="option-line2">Account</span>
            </div>

          { ShowLoginOut && (
             
          <div className="LoginOut-cont">
            {userData.name ?<span className = "logoutbutton" onClick={handleLogout}>Log Out</span>: <Link to="/Login"><span>Login</span></Link>}
          </div>
          
          )}
          
          <Link to="/orders">
          <div className="nav-option">
            <span className="option-line1">Returns</span>
            <span className="option-line2">& Orders</span>
          </div>
          </Link>
          <Link to="/checkout">
            <div className="nav-option-cart">
              <ShoppingCartIcon
                sx={{ fontSize: 35 }}
                className="ShoppingCartI"
              />
              <span className="cart">Cart {basket?.length}</span>
            </div>
          </Link>
        </div>
        </div>

      <div className="header-2">
        <div className="header-2option">
          <span class="box-hover">
            <MenuIcon />
            All
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/fresh?ref_=nav_cs_fresh"
              class="box-hover"
            >
              Fresh
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/fresh?ref_=nav_cs_fresh"
              class="box-hover"
            >
              Amazon miniTV
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3"
              class="box-hover"
            >
              Sell
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/gp/sva/dashboard?ref_=nav_cs_apay"
              class="box-hover"
            >
              Amazon Pay
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc"
              class="box-hover"
            >
              Gift Cards
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/gp/buyagain?ie=UTF8&ref_=nav_cs_buy_again"
              class="box-hover"
            >
              Buy Again
            </a>
          </span>
        </div>
        
        
        <div className="header-2option" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <span>
            <a href="#" class="box-hover">
              Today's Deals
            </a>
            {showCategories && (
              <div className="categories-dropdown" style={{ position: 'relative', marginTop: '220px', left: '0', backgroundColor: "white", border: "2px solid #ddd"}}>
                <ul>
                <Link to= "/Electronics">
                  <li style={{borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <a href="#" className="category-link">Electronics</a>
                  </li>
                  </Link>

                  <Link to= "/Women">
                  <li style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <a href="#" className="category-link">Women</a>
                  </li>
                  </Link>

                  <Link to= "/Men">
                  <li style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <a href="#" className="category-link">Men</a>
                  </li>
                  </Link>

                  {/* <li style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <a href="#" className="category-link">Kids</a>
                  </li>

                  <li style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                    <a href="#" className="category-link">Home Essentials</a>
                  </li> */}
                </ul>
              </div>
            )}
          </span>
        </div>
       
       
        <div className="header-2option">
          <span>
            <a
              href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion"
              class="box-hover"
            >
              Fashion
            </a>
          </span>
        </div>
        <div className="header-2option">
          <span>New launches from Mobiles,Electronics & more|Shop now</span>
        </div>
      </div>
    </div>
    
  );
}
export default Header;
