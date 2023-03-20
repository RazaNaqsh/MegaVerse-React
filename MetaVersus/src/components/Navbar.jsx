import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { mdiInformation } from "@mdi/js";

const Navbar = () => {
	return (
		<motion.nav
			className="relative flex justify-between items-center  h-24 "
			initial={{ y: -250 }}
			animate={{ y: -10 }}
			transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
		>
			<div className="absolute w-[50%] inset-0 gradient-01 -z-10" />

			<Link to="/">
				<motion.p
					whileHover={{
						scale: 1.3,
						origin: 0,
						color: "#f8e112",
					}}
					transition={{
						type: "spring",
						stiffness: 300,
					}}
				>
					<Icon
						path={mdiHome}
						size={1}
					/>
				</motion.p>
			</Link>
			<h2 className="text-white text-2xl font-medium">MEGAVERSE</h2>
			<motion.p
				whileHover={{
					scale: 1.3,
					origin: 0,
					color: "#f8e112",
				}}
				transition={{
					type: "spring",
					stiffness: 300,
				}}
			>
				<Icon
					path={mdiInformation}
					size={1}
				/>
			</motion.p>
		</motion.nav>
	);
};

export default Navbar;
