import { motion } from "framer-motion";

const Footer = () => {
	return (
		<motion.footer
			className="w-full bg-[#1e293b] flex justify-around p-8"
			initial={{ opacity: 0, y: -100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 1.5, bounce: 0.4, delay: 0.2 }}
		>
			<section className="flex flex-col gap-5">
				<p>About</p>
				<p>About</p>
				<p>About</p>
				<p>About</p>
			</section>
			<section className="flex flex-col gap-5">
				<p>About</p>
				<p>About</p>
				<p>About</p>
				<p>About</p>
			</section>
			<section className="flex flex-col gap-5">
				<p>About</p>
				<p>About</p>
				<p>About</p>
				<p>About</p>
			</section>
		</motion.footer>
	);
};

export default Footer;
