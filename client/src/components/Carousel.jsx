import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Hero = () => {
	return (
		<>
			<Carousel>
				<div>
					<img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/SSH/Mar/MFD/uNREC/All/v2/3000all._CB580379196_.jpg' />
				</div>
				<div>
					<img src='https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/PC_hero_3000x1200Unrec._CB580537400_.jpg' />
				</div>
				<div>
					<img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg' />
				</div>
			</Carousel>
		</>
	);
};

export default Hero;
