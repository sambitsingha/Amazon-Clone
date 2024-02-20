import React, { useState } from "react";
import logo from "../assets/amazon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
	return (
		<>
			<nav className='h-14 w-full flex justify-center items-center bg-slate-900 m-auto px-2 text-white'>
				<img
					src={logo}
					alt=''
					className='w-32 hover:border-white hover:border'
				/>
				<div className='hover:border-white hover:border h-full flex flex-col justify-center px-2'>
					<h1 className='text-xs'>Delivering to Kolkata 700009</h1>
					<h1 className='font-bold'>Update location</h1>
				</div>
				<div className='w-1/2 h-full flex justify-center items-center'>
					<input
						type='text'
						placeholder='Search Amazon.in'
						className='w-full h-1/2 px-3 py-5 rounded-l-md'
					/>
					<div className='bg-yellow-400 h-3/4 w-12 rounded-sm flex justify-center items-center'>
						<FontAwesomeIcon
							icon={faSearch}
							style={{ color: "#0f172a", fontSize: "20px" }}
						/>
					</div>
				</div>
				<div></div>
			</nav>
		</>
	);
};
export default Navbar;
