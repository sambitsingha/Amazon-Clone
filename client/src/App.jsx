import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobiles from "./components/mobiles";
import Fashion from "./components/fashion";
import Sports from "./components/sports";
const App = () => {
	return (
		<Router>
			<Home />
			<Routes>
				<Route path='/mobile' component={<Mobiles />} />
				<Route path='/fashion' component={<Fashion />} />
				<Route path='/sports' component={<Sports />} />
			</Routes>
		</Router>
	);
};

export default App;
