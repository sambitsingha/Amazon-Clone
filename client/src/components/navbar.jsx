import React from "react";
import logo from "../assets/Amazon-Emblem.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import flag from "../assets/Flag_of_India.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedCategory, setSelectedCategory] = React.useState(null);
	const categories = [
		{
			name: "Mobiles , Computers",
			subcategories: ["Mobiles", "Laptops", "Desktops"],
		},
		{ name: "Men's Fashion", subcategories: ["Shirts", "Pants", "Shoes"] },
		{
			name: "Sports, Fitness bags and lugage",
			subcategories: ["Sports", "Fitness", "Bags"],
		},
	];
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};
	const handleClick = (item) => {
		if (item.subcategories) {
			setSelectedCategory(item.subcategories);
		} else {
			toggleDrawer(false);
		}
	};

	const DrawerList = (
		<Box sx={{ width: 300 }} role='presentation'>
			<List disablePadding>
				{(selectedCategory ? selectedCategory : categories).map(
					(item, index) => (
						<ListItem key={item.name || item} disablePadding>
							<ListItemButton onClick={() => handleClick(item)}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={item.name || item} />
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
			<Divider />
		</Box>
	);
	return (
		<>
			<nav className='w-full h-16 bg-slate-900 px-5 flex text-white justify-around items-center'>
				<img src={logo} alt='' className='md:w-24 lg:w-28 w-16' />
				<div className='mx-3'>
					<p className='lg:text-sm md:text-xs text-[10px]'>
						Delivering to Kolkata 700047
					</p>
					<p className='lg:text-sm md:text-xs text-[10px] font-bold'>
						Update location
					</p>
				</div>
				<form action='#'>
					<input
						type='text'
						className='h-10 lg:w-96 md:w-56 sm:w-52 w-40 p-2 rounded-l-md'
						placeholder='Search Amazon.in'
					/>
					<button
						type='submit'
						className='h-10 w-10 bg-yellow-600 rounded-r-md'>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</form>
				<div className='flex mx-2 '>
					<img src={flag} alt='' className='w-8 mx-1' />
					<h1>EN</h1>
				</div>
				<div>
					<p className='lg:text-sm md:text-xs text-[10px]'>Hello, Sign in</p>
					<p className='font-bold lg:text-sm md:text-xs text-[10px]'>
						Acconts and lists
					</p>
				</div>
				<div>
					<p className='lg:text-sm md:text-xs text-[10px]'>Returns</p>
					<p className='font-bold lg:text-sm md:text-xs text-[10px]'>
						& Orders
					</p>
				</div>
				<div className='flex justify-between items-end '>
					<FontAwesomeIcon
						icon={faCartShopping}
						className='lg:text-3xl md:text-xl text-xs'
					/>
					<p className='font-bold lg:text-sm md:text-xs text-[10px]'>Cart</p>
				</div>
			</nav>
			<nav className='h-10 w-full bg-slate-800 text-white flex justify-between items-center px-5'>
				<div>
					<Button onClick={toggleDrawer(true)}>All</Button>
					<Drawer open={open} onClose={toggleDrawer(false)}>
						{DrawerList}
					</Drawer>
				</div>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Fresh
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Amazon MiniTV
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Sell
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Best Sellers
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Mobile
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Electronics
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Prime
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Prime
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Customer Service
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					New Releases
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Home & Kitchen
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Gift Ideas
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Fashion
				</h1>
				<h1 className='cursor-pointer hover:p-1 hover:border-white hover:border'>
					Amazon Pay
				</h1>
			</nav>
		</>
	);
};

export default Navbar;
