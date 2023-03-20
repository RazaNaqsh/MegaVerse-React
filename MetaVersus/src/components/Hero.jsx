import { motion } from "framer-motion";
import cover from "../assets/svg-icons/cover.png";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "80vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			delay: 1.5,
			mass: 0.8,
			damping: 10,
		},
	},
};

const Hero = () => {
	return (
		<section className="pt-24">
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ delay: 1, duration: 0.9 }}
				className="text-gradient color-show"
			>
				<h1 className="text-white text-[144px] leading-[120px] font-bold text-center ">
					MEGAVERSE
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
				whileInView="visible"
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
