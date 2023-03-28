import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const exploreVariants = {
	hidden: {
		opacity: 0,
		x: 200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			mass: 1,
			damping: 8,
			delay: 1,
			duration: 0.4,
		},
	},
	tap: {
		scale: 0.9,
	},
	hover: {
		scale: 1.2,
		textShadow: "0px 0px 8px rgb(0,100,255)",
		transition: {
			type: "spring",
			ease: "easeOut",
			damping: 10,
			bounce: 0.4,
		},
	},
	rocket: {
		scale: [1, 1.1, 1.1, 1, 1],
		y: [5, 0, 5, 0, 5, 0, 5],
		x: [10, 0, 10, 0, 10, 0, 10],
		transition: {
			duration: 1,
			ease: "easeInOut",
			repeat: "Infinity",
		},
	},
};
const Explore = () => {
	return (
		<motion.section
			className="py-20 my-36 w-full text-center"
			variants={exploreVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h1 className="text-7xl font-sans font-thin">
				Lets dive into My world of Projects
			</h1>
			<motion.h2
				className="w-fit m-auto mt-10 font-light font-sans text-8xl cursor-pointer"
				variants={exploreVariants}
				whileHover="hover"
				whileTap="tap"
			>
				<Link to="/projects">
					explore
					<motion.div
						variants={exploreVariants}
						animate="rocket"
					>
						🚀
					</motion.div>
				</Link>
			</motion.h2>
		</motion.section>
	);
};

export default Explore;
