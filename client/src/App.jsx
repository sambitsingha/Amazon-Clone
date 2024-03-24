import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobiles from "./components/mobiles";
import Fashion from "./components/fashion";
import Sports from "./components/sports";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/mobiles' element={<Mobiles />} />
				<Route path='/fashion' element={<Fashion />} />
				<Route path='/sports' element={<Sports />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
