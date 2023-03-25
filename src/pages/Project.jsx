import { motion } from "framer-motion";
import { projectData } from "../constants/projectData";

const Variants = {
	initial: {
		x: "-100vw",
	},
	animate: {
		x: 0,
		transition: {
			type: "spring",
			duration: 3,
			bounce: 0.3,
		},
	},
	hover: {
		scale: 1.05,
		transition: {
			type: "spring",
			damping: 8,
		},
	},
	exit: {
		x: "100vw",
		transition: {
			type: "spring",
			bounce: 0.3,
		},
	},
};
const Project = () => {
	return (
		<motion.section
			className="bg-[#334155] rounded-xl p-8 space-y-20"
			variants={Variants}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<div className="project-section flex flex-wrap gap-10  justify-around">
				{projectData.map((project) => (
					<motion.div
						className="my-4 bg-[#475569] rounded-xl overflow-hidden"
						variants={Variants}
						whileHover="hover"
					>
						<h1 className="text-center text-xl text-blue-200 font-sans font-light my-4 ">
							{project.name}
						</h1>
						<img
							src={project.imgSrc}
							alt=""
							className="h-[270px] w-[500px] object-cover"
						/>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default Project;
