import HScroll from "./components/HScroll";
import Card from "./components/card";
import Hero from "./components/carousel";
import Navbar from "./components/navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Card />
			<HScroll />
		</>
	);
};

export default App;
