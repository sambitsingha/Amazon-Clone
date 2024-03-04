import React from "react";
const Footer = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<hr className='h-1 w-full bg-slate-100 my-7' />
				<h1 className='text-sm my-2'>See personalized reccomendations</h1>
				<button className='bg-yellow-300 w-60 rounded-lg h-8 shadow-xl font-semibold'>
					Sign In
				</button>
				<p className='my-1 text-sm'>
					New customer?{" "}
					<a href='#' className='text-blue-700'>
						Start here
					</a>
				</p>
				<hr className='h-1 w-full bg-slate-100 my-5' />
			</div>
			<div className='w-full bg-slate-700 text-center text-white py-4'>
				<h1>Back to Top</h1>
			</div>
			<footer className='flex flex-col justify-around items-center pt-5 bg-slate-800 text-white'>
				<div>
					<div>
						<h1 className='font-bold'>Get to Know Us</h1>
						<ul className='text-sm'>
							<li>About us</li>
							<li>Careers</li>
							<li>Press releases</li>
							<li>Amazon Science</li>
						</ul>
					</div>
					<div>
						<h1 className='font-bold'>Connect with us</h1>
						<ul className='text-sm'>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
						</ul>
					</div>
					<div>
						<h1 className='font-bold'>Make Money with Us</h1>
						<ul className='text-sm'>
							<li>Sell on Amazon</li>
							<li>Sell under Amazon Accelerator</li>
							<li>Protect and build your brand</li>
							<li>Become an affiliate</li>
							<li>Amaxon Global Selling</li>
							<li>Fulfilment by Amazon</li>
							<li>Advertise your products</li>
							<li>Amazon pay on Merchants</li>
						</ul>
					</div>
					<div>
						<h1 className='font-bold'>Let Us help You</h1>
						<ul className='text-sm'>
							<li>Your account</li>
							<li>Returns Center</li>
							<li>COVID-19 and Amazon</li>
							<li>100% Purchase Protection</li>
							<li>Amazon App Download</li>
							<li>Help</li>
						</ul>
					</div>
				</div>
				<hr className='w-full' />
			</footer>
		</>
	);
};

export default Footer;
