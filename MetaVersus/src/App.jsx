import Description from "./components/Description";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="bg-[#1A232E] px-28 text-white">
			<Navbar />
			<Hero />
			<Description />
		</div>
	);
}

export default App;
