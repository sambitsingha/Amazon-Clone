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
		</>
	);
};

export default Footer;
