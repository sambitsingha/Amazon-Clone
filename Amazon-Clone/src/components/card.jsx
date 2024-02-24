import React, { useState } from "react";
const Card = () => {
	return (
		<section className='flex justify-between items-center overflow-x-hidden mx-5'>
			<Item />
			<Item />
			<Item />
			<Item />
		</section>
	);
};
const Item = () => {
	return (
		<>
			<div className='w-80 h-96 bg-gray-200 py-3 flex-col justify-center items-center'>
				<div>
					<h1 className='text-center text-xl font-bold'>
						Revamp your home in style
					</h1>
					<div className='flex justify-around items-center'>
						<div className='w-40 p-4 h-36'>
							<img
								src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg'
								alt=''
								className='h-full w-40'
							/>
							<h1 className='text-xs'>Cushion covers , bedsheets and more</h1>
						</div>
						<div className='w-40 p-4 h-36'>
							<img
								src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg'
								alt=''
								className='h-full w-40'
							/>
							<h1 className='text-xs'>Figurines , Vases and more</h1>
						</div>
					</div>
					<div className='flex justify-around items-center'>
						<div className='w-40 p-4 h-36'>
							<img
								src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg'
								alt=''
								className='h-full w-40'
							/>
							<h1 className='text-xs'>Home storages</h1>
						</div>
						<div className='w-40 p-4 h-36'>
							<img
								src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg'
								alt=''
								className='h-full w-40'
							/>
							<h1 className='text-xs'>Lighting solutinons</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
