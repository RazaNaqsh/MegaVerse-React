import { motion } from "framer-motion";

import search from "../assets/search.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
	return (
		<motion.nav
			className="relative flex justify-between items-center  h-24 "
			initial={{ y: -250 }}
			animate={{ y: -10 }}
			transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
		>
			<div className="absolute w-[50%] inset-0 gradient-01" />
			<img
				src={search}
				alt="search"
				className="h-[24px] w-[24px] object-contain"
			/>
			<h2 className="text-white text-2xl font-medium">METAVERSUS</h2>
			<img
				src={menu}
				alt="menu"
				className="h-[24px] w-[24px] object-contain"
			/>
		</motion.nav>
	);
};

export default Navbar;
