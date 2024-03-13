import React from "react";
import { Carousel } from "flowbite-react";
const Hero = () => {
	return (
		<>
			<div className='lg:h-96 md:h-80 sm:h-72 h-60 w-full'>
				<Carousel>
					<img
						src='https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg'
						alt='...'
					/>
					<img
						src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/March/unrec/All/HSBC/3000pc._CB580474950_.jpg'
						alt='...'
					/>
					<img
						src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/BAU_GW_Bedsheets_PC_12th._CB580694896_.jpg'
						alt='...'
					/>
					<img
						src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg'
						alt='...'
					/>
					<img
						src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg'
						alt='...'
					/>
				</Carousel>
			</div>
		</>
	);
};

export default Hero;
