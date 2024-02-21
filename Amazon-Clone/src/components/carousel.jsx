import React from "react";
import { Carousel } from "flowbite-react";

const Hero = () => {
	return (
		<div className=' sm:h-64 xl:h-80 2xl:h-96'>
			<Carousel slideInterval={5000}>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/February/Unrec/PC_3000_1._CB581367587_.jpg'
					alt='...'
					className='mt-28'
				/>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg'
					alt='...'
					className='mt-28'
				/>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg'
					alt='...'
					className='mt-28'
				/>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg'
					alt='...'
					className='mt-28'
				/>
				<img
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/GW/Jan/unrecHero/Feb/Skincare-PC._CB582198231_.jpg'
					alt='...'
					className='mt-28'
				/>
			</Carousel>
		</div>
	);
};

export default Hero;
