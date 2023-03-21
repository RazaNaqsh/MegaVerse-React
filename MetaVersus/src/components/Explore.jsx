import { easeInOut, easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Explore = () => {
	return (
		<motion.section
			className="py-20 my-36 w-full text-center"
			initial={{ opacity: 0, x: 200 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: false }}
			transition={{
				type: "spring",
				mass: 1,
				damping: 8,
				delay: 1,
				duration: 0.4,
			}}
		>
			<h1 className="text-7xl font-sans font-thin">
				Lets dive into My world of Projects
			</h1>
			<motion.h2
				className="mt-10 font-light font-sans text-8xl cursor-pointer"
				// initial={{ opacity: 0, y: -200 }}
				// whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(0,100,255)" }}
				whileTap={{ scale: 0.9 }}
				transition={{
					type: "spring",
					ease: easeInOut,
					damping: 10,
					mass: 1,
					stiffness: 130,
					// delay: 2,
				}}
			>
				<Link to="/projects">
					explore
					<motion.div
						animate={{
							// scale: [1, 1.1, 1.1, 1, 1],
							y: [5, 0, 5, 0, 5, 0, 5],
							x: [10, 0, 10, 0, 10, 0, 10],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
							repeat: Infinity,
						}}
					>
						🚀
					</motion.div>
				</Link>
			</motion.h2>
		</motion.section>
	);
};

export default Explore;
