import React, { useState } from "react";
import logo from "../assets/amazon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import flag from "../assets/Flag_of_India.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className='h-14 w-full flex justify-around items-center bg-slate-900 m-auto px-2 text-white'>
				<img
					src={logo}
					alt=''
					className='w-32 hover:border-white hover:border'
				/>
				<div className='hover:border-white hover:border h-full flex flex-col justify-center px-2'>
					<h1 className='text-xs'>Delivering to Kolkata 700009</h1>
					<h1 className='font-bold'>Update location</h1>
				</div>
				<div className='w-5/12 h-full flex justify-center items-center'>
					<input
						type='text'
						placeholder='Search Amazon.in'
						className='w-full h-1/2 px-5 py-5 rounded-l-md'
					/>
					<div className='bg-yellow-400 h-3/4 w-12 rounded-sm flex justify-center items-center rounded-r-md'>
						<FontAwesomeIcon
							icon={faSearch}
							style={{ color: "#0f172a", fontSize: "20px" }}
						/>
					</div>
				</div>
				<div className='h-full px-3 flex justify-between items-center hover:border-white hover:border'>
					<img src={flag} alt='' className='w-5' />
					<p className='font-bold mx-1'>EN</p>
				</div>
				<div className='hover:border-white hover:border h-full flex px-2 items-start justify-center flex-col'>
					<h1 className='text-xs'>Hello, sign in</h1>
					<h1 className='font-bold text-sm'>Accounts & Lists</h1>
				</div>
				<div className='hover:border-white hover:border h-full flex px-2 items-start justify-center flex-col'>
					<h1 className='text-xs'>Returns</h1>
					<h1 className='font-bold text-sm'> & Orders</h1>
				</div>
				<div className='font-semibold hover:border-white hover:border h-full flex px-2 items-center'>
					<FontAwesomeIcon
						icon={faCartShopping}
						style={{ color: "#ffffff", fontSize: "25px" }}
					/>
					Cart
				</div>
			</nav>
			<nav className='h-10 w-full flex justify-around items-center bg-slate-800 m-auto px-2 text-white'>
				<div className='hover:border-white hover:border h-full flex items-center p-1'>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='flex justify-between items-center w-12 font-bold'>
						<div className='flex-col '>
							<div className='w-5 h-[3px] bg-white flex flex-col justify-center items-center my-1'></div>
							<div className='w-5 h-[3px] bg-white flex flex-col justify-center items-center my-1'></div>
							<div className='w-5 h-[3px] my-1 bg-white flex flex-col justify-center items-center'></div>
						</div>
						All
					</button>
					<div
						className={`fixed top-0 left-0 h-screen overflow-hidden transition-all duration-500 bg-gray-200 p-5 transform ${
							isOpen ? "translate-x-0 w-80" : "-translate-x-full"
						}`}>
						<p>Drawer Content</p>
					</div>
				</div>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Fresh
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Amazon Mini TV
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Sell
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Bets sellers
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Today's deals
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Customer service
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Electronics
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					New Releases
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Prime
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Fashion
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Gift Ideas
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Home & Kitchen
				</h1>
				<h1 className='hover:border-white hover:border h-full flex items-center p-1'>
					Amazon Pay
				</h1>
			</nav>
		</>
	);
};
export default Navbar;
