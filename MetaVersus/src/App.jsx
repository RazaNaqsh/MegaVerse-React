import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import Project from "./pages/Project";

function App() {
	return (
		<div className="bg-[#1A232E] px-28 text-white min-h-screen ">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/projects"
					element={<Project />}
				/>
			</Routes>
		</div>
	);
}

export default App;
