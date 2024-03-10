import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
	let settings = {
		dots: true,
		infinite: true, // Enables infinite scrolling
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true, // Shows navigation arrows
	};
	return (
		<Slider {...settings}>
			<div>
				<img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/Baby/Homepage_DesktopHeroTemplate_1500x600._CB580021402_.jpg' />
			</div>
			<div>
				<img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCww._CB580852678_.jpg' />
			</div>
			<div>
				<img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/SSH/Mar/MFD/uNREC/All/v2/3000all._CB580379196_.jpg' />
			</div>
		</Slider>
	);
};

export default Hero;
