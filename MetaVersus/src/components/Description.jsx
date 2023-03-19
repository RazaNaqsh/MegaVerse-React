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
			<h1 className="font-sans font-light">|About MetaVersus</h1>
			<p className="mt-4 text-4xl leading-tight font-sans  font-thin">
				Metaverse is a new thing in the future, where you can enjoy the virtual
				world by feeling like it's really real, you can feel what you feel in
				this metaverse world, because this is really the madness of the
				metaverse of today, using only VR devices you can easily explore the
				metaverse world you want, turn your dreams into reality. Let's explore
				the madness of the metaverse by scrolling down
			</p>
		</motion.section>
	);
};

export default Description;
