import { motion } from "framer-motion";

const Description = () => {
	return (
		<motion.section
			className="w-[60vw] m-auto mt-36 text-center"
			initial={{ opacity: 0, x: -200 }}
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
			<h1 className="font-sans font-light">|About MegaVersus</h1>
			<p className="mt-4 text-4xl leading-tight font-sans  font-thin">
				<span className="font-sans font-light">MegaVerse</span> is my personal
				project which is a{" "}
				<span className="font-sans font-light">showcase</span> which includes
				all of my other project put into one place to show off my{" "}
				<span className="font-sans font-light">FrontEnd Skills</span>. This
				helps me integrate everything ive done into one Mega project, thus I
				named it MegaVerse. Ive used everything ive learn in React till date
				into this project, and I plan to integrate other things as well in the
				future as I learn more !
			</p>
		</motion.section>
	);
};

export default Description;
