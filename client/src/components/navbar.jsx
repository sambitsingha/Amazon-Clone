import React from "react";
import logo from "../assets/Amazon-Emblem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import flag from "../assets/Flag_of_India.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<>
			<nav className='w-full bg-slate-900 px-5 flex flex-wrap justify-between items-center text-white'>
				<div className='flex items-center space-x-4 w-full sm:w-auto'>
					<img src={logo} alt='' className='w-28' />
					<div className='hidden sm:block'>
						<p className='text-sm'>Delivering to Kolkata 700047</p>
						<p className='text-sm font-bold'>Update location</p>
					</div>
				</div>
				<form
					action='#'
					className='flex items-center w-full sm:w-auto mt-4 sm:mt-0'>
					<input
						type='text'
						className='h-10 w-full sm:w-96 p-2 rounded-l-md'
						placeholder='Search Amazon.in'
					/>
					<button
						type='submit'
						className='h-10 w-10 bg-yellow-600 rounded-r-md'>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>

				<div className='flex items-center space-x-2 mt-4 sm:mt-0'>
					<div className='hidden sm:block'>
						<img src={flag} alt='' className='w-8' />
						<h1 className='text-xs'>EN</h1>
					</div>
					<div className='hidden sm:block'>
						<p className='text-sm'>Hello, Sign in</p>
						<p className='font-bold text-sm'>Accounts and lists</p>
					</div>
					<div className='hidden sm:block'>
						<p className='text-sm'>Returns</p>
						<p className='font-bold text-sm'>& Orders</p>
					</div>
					<div className='flex items-center'>
						<FontAwesomeIcon icon={faCartShopping} className='text-3xl' />
						<p className='font-bold text-sm ml-1'>Cart</p>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
