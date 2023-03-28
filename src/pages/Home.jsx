import { motion } from "framer-motion";
import Description from "../components/Description";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Stack from "../components/Stack";

const Home = () => {
	return (
		<motion.div exit={{ opacity: 0 }}>
			<Hero />
			<Description />
			<Stack />
			<Explore />
			<Footer />
		</motion.div>
	);
};

export default Home;
