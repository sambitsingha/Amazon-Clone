import React from "react";
import logo from "../assets/Amazon-Emblem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import flag from "../assets/Flag_of_India.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
	return (
		<>
			<nav className='w-full h-16 bg-slate-900 px-5 flex text-white justify-around items-center'>
				<img src={logo} alt='' className='w-28' />
				<div>
					<p className='text-sm'>Delivering to Kolkata 700047</p>
					<p className='text-sm font-bold'>Update location</p>
				</div>
				<form action='#'>
					<input
						type='text'
						className='h-10 w-96 p-2 rounded-l-md'
						placeholder='Search Amazon.in'
					/>
					<button
						type='submit'
						className='h-10 w-10 bg-yellow-600 rounded-r-md'>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>
				<div className='flex'>
					<img src={flag} alt='' className='w-8 mx-2' />
					<h1>EN</h1>
				</div>
				<div>
					<p className='text-sm'>Hello, Sign in</p>
					<p className='font-bold text-sm'>Acconts and lists</p>
				</div>
				<div>
					<p className='text-sm'>Returns</p>
					<p className='font-bold text-sm'>& Orders</p>
				</div>
				<div className='flex justify-between items-end'>
					<FontAwesomeIcon icon={faCartShopping} className='text-3xl' />
					<p className='font-bold text-sm'>Cart</p>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
