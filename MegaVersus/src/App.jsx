import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="bg-[#1A232E] px-28 text-white min-h-screen ">
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/projects"
						element={<Project />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
