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
			<div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
			<motion.img
				src={search}
				alt="search"
				className="h-[24px] w-[24px] object-contain cursor-pointer"
				whileHover={{
					scale: 1.3,
					originX: 0,
					color: "#f8e112",
				}}
				transition={{
					type: "spring",
					stiffness: 300,
				}}
			/>
			<h2 className="text-white text-2xl font-medium">MEGAVERSE</h2>
			<motion.img
				src={menu}
				alt="menu"
				className="h-[24px] w-[24px] object-contain cursor-pointer "
				whileHover={{
					scale: 1.3,
					originX: 0,
					color: "#f8e112",
				}}
				transition={{
					type: "spring",
					stiffness: 300,
				}}
			/>
		</motion.nav>
	);
};

export default Navbar;
