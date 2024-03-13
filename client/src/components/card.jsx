import React from "react";
const Card = () => {
	return (
		<>
			<section className='bg-gradient-bg pt-7 flex justify-around items-center px-2'>
				<Maincard {...firstCard} />
				<Maincard {...secondCard} />
				<Maincard {...thirdCard} />
				<Maincard {...fourthCard} />
			</section>
			;
		</>
	);
};

const Maincard = ({
	heading,
	subtitle1,
	subtitle2,
	subtitle3,
	subtitle4,
	img1,
	img2,
	img3,
	img4,
}) => {
	return (
		<div className='w-1/4 mx-2 h-96 bg-gray-200 flex flex-col justify-around items-center rounded'>
			<h1 className='text-center text-xl font-semibold px-1'>{heading}</h1>
			<div className='flex justify-around items-center px-3 w-full'>
				<div className='w-1/2 h-full mr-2'>
					<img src={img1} alt='' />
					<h1 className='text-xs'>{subtitle1}</h1>
				</div>
				<div className='w-1/2 h-full'>
					<img src={img2} alt='' />
					<h1 className='text-xs'>{subtitle2}</h1>
				</div>
			</div>
			<div className='flex justify-around items-center px-3 w-full'>
				<div className='w-1/2 h-full mr-2'>
					<img src={img3} alt='' />
					<h1 className='text-xs'>{subtitle3}</h1>
				</div>
				<div className='w-1/2 h-full'>
					<img src={img4} alt='' />
					<h1 className='text-xs'>{subtitle4}</h1>
				</div>
			</div>
			<a href='#'>
				<h1>Explore All</h1>
			</a>
		</div>
	);
};

const firstCard = {
	heading: "Revamp your home in style",
	subtitle1: "Cushions covers,bedsheets & more",
	subtitle2: "Figurines vases and more",
	subtitle3: "Home storage",
	subtitle4: "Lighting soltuions",
	img1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
	img2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
	img3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
	img4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
};

const secondCard = {
	heading: "Appliances for your home | Up to 55% off",
	subtitle1: "Air conditioners",
	subtitle2: "Refrigerators",
	subtitle3: "Microwaves",
	subtitle4: "Washing machines",
	img1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
	img2: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
	img3: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
	img4: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
};

const thirdCard = {
	heading: "Up to 60% off | Styles for men",
	subtitle1: "Clothing",
	subtitle2: "Footwear",
	subtitle3: "Watches",
	subtitle4: "Bags & luggage",
	img1: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
	img2: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
	img3: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
	img4: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
};

const fourthCard = {
	heading: "Starting ₹99 | All your home improvement needs",
	subtitle1: "Spin mops,wipes and more",
	subtitle2: "Bathroom hardware and accessories",
	subtitle3: "Hammers,screwdrivers and more",
	subtitle4: "Extension boards, plug and more",
	img1: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_4._SY116_CB600489960_.jpg",
	img2: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_3._SY116_CB600489960_.jpg",
	img3: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_7._SY116_CB600489960_.jpg",
	img4: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_186x116_5._SY116_CB600489960_.jpg`",
};
export default Card;
