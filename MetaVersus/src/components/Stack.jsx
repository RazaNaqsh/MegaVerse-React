import { motion } from "framer-motion";
import logos from "../assets/svg-pl/langIcons";

const Stack = () => {
	return (
		<motion.section
			className="w-[65vw] m-auto "
			initial={{ opacity: 0, y: -100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 2, bounce: 0.4, delay: 0.8 }}
		>
			<h1 className="font-sans font-light text-3xl">
				Technologies I use to Turn my Ideas into Reality
			</h1>
			<div className="bg-[#334155] my-8 p-8 flex justify-around">
				{logos.map((logo) => (
					<motion.div
						whileHover={{ scale: 1.1 }}
						transition={{ type: "spring", damping: 5, stiffness: 100 }}
					>
						<img
							src={logo}
							className="h-[80px] w-[80px] object-contain"
						/>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default Stack;
