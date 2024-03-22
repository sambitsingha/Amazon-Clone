import React from "react";
import Navbar from "./navbar";
import Hero from "./carousel";
import Card from "./card";
import HScroll from "./HScroll";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Card />
			<HScroll />
			<Card />
		</>
	);
};

export default Home;
