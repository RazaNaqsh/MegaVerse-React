import { motion } from "framer-motion";

const Project = () => {
	return (
		<motion.section
			className="bg-[#334155] rounded-xl p-8 space-y-20"
			initial={{ x: "-100vw" }}
			animate={{ x: 0 }}
			transition={{ type: "spring", duration: 3, bounce: 0.3 }}
		>
			<h1>This is Project section</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
				dignissimos officia accusamus voluptatem, deserunt recusandae ea error
				tempore dolorum veritatis?
			</p>
		</motion.section>
	);
};

export default Project;
