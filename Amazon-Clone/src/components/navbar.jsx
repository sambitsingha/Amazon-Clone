import React, { useState } from "react";
import logo from "../assets/amazon-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import flag from "../assets/Flag_of_India.png";
import {
	Drawer,
	Button,
	Typography,
	IconButton,
} from "@material-tailwind/react";
const Navbar = () => {
	const [open, setOpen] = React.useState(false);

	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);

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
			<nav className='h-10 w-full flex justify-around items-center bg-blue-900 m-auto px-2 text-white'>
				<Button onClick={openDrawer}>Open Drawer</Button>
				<Drawer open={open} onClose={closeDrawer} className='p-4'>
					<div className='mb-6 flex items-center justify-between'>
						<Typography variant='h5' color='blue-gray'>
							Material Tailwind
						</Typography>
						<IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className='h-5 w-5'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</IconButton>
					</div>
					<Typography color='gray' className='mb-8 pr-4 font-normal'>
						Material Tailwind features multiple React and HTML components, all
						written with Tailwind CSS classes and Material Design guidelines.
					</Typography>
					<div className='flex gap-2'>
						<Button size='sm' variant='outlined'>
							Documentation
						</Button>
						<Button size='sm'>Get Started</Button>
					</div>
				</Drawer>
			</nav>
		</>
	);
};
export default Navbar;
