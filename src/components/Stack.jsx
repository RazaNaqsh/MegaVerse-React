import { motion } from "framer-motion";
import logos from "../assets/svg-pl/langIcons";

const variants = {
	hidden: {
		opacity: 0,
		y: -125,
	},
	visible: {
		opacity: 1,
		y: 0,

		transition: { type: "spring", duration: 1.5, bounce: 0.4, delay: 0.8 },
	},
	hover: {
		scale: 1.2,
		transition: {
			type: "spring",
			damping: 10,
			stiffness: 130,
		},
	},
};
const Stack = () => {
	return (
		<motion.section
			className="w-[65vw] m-auto "
			variants={variants}
			initial="hidden"
			whileInView="visible"
		>
			<h1 className="font-sans font-light text-3xl">
				Technologies I use to Turn my Ideas into Reality
			</h1>
			<div className="bg-[#334155] my-8 p-8 flex justify-around">
				{logos.map((logo, index) => (
					<motion.div
						variants={variants}
						whileHover="hover"
						key={index}
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
