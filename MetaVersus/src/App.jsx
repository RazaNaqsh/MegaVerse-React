import Description from "./components/Description";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";

function App() {
	return (
		<div className="bg-[#1A232E] px-28 text-white">
			<Navbar />
			<Hero />
			<Description />
			<Stack />
			<Explore />
			<Footer />
		</div>
	);
}

export default App;
