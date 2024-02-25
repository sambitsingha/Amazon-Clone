import React, { useState } from "react";
const Card = () => {
	return (
		<section className='flex justify-around items-center overflow-x-hidden'>
			<Item heading={card1.heading} items={card1.items} />
			<Item heading={card2.heading} items={card2.items} />
			<Item heading={card3.heading} items={card3.items} />
			<Item heading={card4.heading} items={card4.items} />
		</section>
	);
};
const Item = ({ heading, items }) => {
	return (
		<>
			<div className='w-80 h-96 bg-gray-100 py-3 flex-col justify-center items-center'>
				<div>
					<h1 className='text-center text-xl font-bold'>{heading}</h1>
					<div className='flex flex-wrap justify-around items-center'>
						{items.map((item, index) => (
							<div key={index} className='w-40 p-4 h-auto'>
								<img src={item.src} alt='' className='h-full w-40' />
								<h1 className='text-xs'>{item.text}</h1>
							</div>
						))}
						<a href='#'>
							<h1 className='text-sky-700 hover:text-orange-600 hover:underline'>
								Sell all offers
							</h1>
						</a>
					</div>
					{/* <div className='flex justify-around items-center'>
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
					</div> */}
				</div>
			</div>
		</>
	);
};

const card1 = {
	heading: "Revamp your home in style",
	items: [
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
			text: "Cushion covers, bedsheets and more",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
			text: "Figurines , vases and more",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
			text: "Home storage",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
			text: "Lighting solutions",
		},
	],
};
const card2 = {
	heading: "Up to 75% off | Headphones",
	items: [
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_1x._SY116_CB577919562_.jpg",
			text: "Up to 75% off | boAt",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_1x._SY116_CB577919562_.jpg",
			text: "Up to 75% off | Boult",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_1x._SY116_CB577919562_.jpg",
			text: "Up to 75% off | Noise",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Zebronics_Desktop_Qc_1x._SY116_CB577919562_.jpg",
			text: "Up to 75% off | Zebronics",
		},
	],
};

const card3 = {
	heading: "Up to 60% off | Styles for Men",
	items: [
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
			text: "Clothing",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
			text: "Footwear",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
			text: "Watches",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
			text: "Bags and wallets",
		},
	],
};

const card4 = {
	heading: "Appliances for your home | Up to 55% off",
	items: [
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
			text: "Air Conditioners",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
			text: "Refrigerators",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
			text: "Microwaves",
		},
		{
			src: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
			text: "Washing machines",
		},
	],
};
export default Card;
