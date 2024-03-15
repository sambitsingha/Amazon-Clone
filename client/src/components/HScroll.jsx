import React from "react";
const HScroll = () => {
	return (
		<div className='flex flex-col w-full bg-gray-100 mb-5'>
			<div className='mx-5 flex justify-between items-center w-3/4 mb-4'>
				<h1 className='text-2xl font-semibold'>
					Up to 50% off | Elevate your kitchen aesthetics with best kitchen
					appliances
				</h1>
				<a href='#'>Sell all offers</a>
			</div>
			<div className='flex justify-around items-center overflow-x-auto w-full'>
				<img
					src='https://m.media-amazon.com/images/I/61HVIvLiVRL._AC_SY200_.jpg'
					alt=''
					className='w-56 mx-2'
				/>
				<img
					src='https://m.media-amazon.com/images/I/51Cq1exILLS._AC_SY200_.jpg'
					alt=''
					className='w-56 mx-2'
				/>
				<img
					src='https://m.media-amazon.com/images/I/71J7jrDJwlL._AC_SY200_.jpg'
					alt=''
					className='w-56 mx-2'
				/>
				<img
					src='https://m.media-amazon.com/images/I/51EEaIAPujS._AC_SY200_.jpg'
					alt=''
					className='w-56 mx-2'
				/>
				<img
					src='https://m.media-amazon.com/images/I/716hgFnTcyL._AC_SY200_.jpg'
					alt=''
					className='w-56 mx-2'
				/>
			</div>
		</div>
	);
};

export default HScroll;
