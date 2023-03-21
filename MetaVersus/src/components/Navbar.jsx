import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { mdiInformation } from "@mdi/js";

const navVariants = {
	hidden: {
		opacity: 0,
		y: -90,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			delay: 0.3,
			stiffness: 120,
		},
	},
};

const navHovers = {
	hover: {
		scale: 1.3,
		origin: 0,
		color: "#f8e112",
		transition: {
			type: "spring",
			stiffness: 300,
		},
	},
};
const Navbar = () => {
	return (
		<motion.nav
			className="relative flex justify-between items-center  h-24 z-0 "
			variants={navVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: false }}
		>
			<div className="absolute w-[50%] inset-0 gradient-01 -z-10" />

			<Link to="/">
				<motion.p
					className="z-10"
					variants={navHovers}
					whileHover="hover"
				>
					<Icon
						path={mdiHome}
						size={1}
					/>
				</motion.p>
			</Link>
			<h2 className="text-white text-2xl font-medium">MEGAVERSE</h2>
			<motion.p
				variants={navHovers}
				whileHover="hover"
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
