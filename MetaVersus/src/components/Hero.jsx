import { motion } from "framer-motion";
import cover from "../assets/cover.png";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 1,
			mass: 1,
			damping: 14,
		},
	},
};

const Hero = () => {
	return (
		<section className="pt-24">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 1 }}
				className="text-gradient"
			>
				<h1 className="text-white text-[144px] leading-[120px] font-bold text-center ">
					METAVERSE
				</h1>
				<div className="flex justify-center items-center">
					<h1 className="text-white text-[144px] leading-[158px] font-bold text-center ">
						MA
					</h1>

					<div className="h-[100px] w-[190px] border-l-[15px] border-t-[17px] border-b-[17px] border-r-[15px] rounded-r-full mb-1"></div>
					<h1 className="text-white text-[144px] leading-[158px] font-bold text-center ">
						NESS
					</h1>
				</div>
			</motion.div>
			<motion.div
				className="relative"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="absolute w-full h-[300px] z-0 hero-gradient -top-[29px] rounded-tl-[130px]" />
				<img
					src={cover}
					alt=""
					className="w-full m-auto h-[478px] object-cover rounded-tl-[150px] rounded-tr-none z-10 relative"
				/>
			</motion.div>
		</section>
	);
};

export default Hero;
