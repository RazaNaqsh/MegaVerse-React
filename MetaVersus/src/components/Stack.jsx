import { delay, motion } from "framer-motion";

const Stack = () => {
	return (
		<motion.section
			className="w-[65vw] m-auto "
			initial={{ opacity: 0, y: -100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 2, bounce: 0.4, delay: 0.8 }}
		>
			<h1 className="font-sans font-light text-2xl">
				Technologies I use to Turn my Ideas into Reality
			</h1>
			<div className="bg-[#334155] my-8 p-8">Tech stack goes in here</div>
		</motion.section>
	);
};

export default Stack;
