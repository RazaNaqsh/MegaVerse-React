import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";

const Hero = () => (
	<section
		id="home"
		className={`flex md:flex-row flex-col ${styles.paddingY}`}
	>
		<div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
		>
			<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
				<img
					src={discount}
					alt="discount"
					className="w-[32px] h-[32px]"
				/>
				<p className={`${styles.paragraph} ml-2`}>
					<span className="text-white">20%</span> Discount for{" "}
					<span className="text-white">1 Month</span> Account
				</p>
			</div>
			<div className="flex flex-row w-full text-white text-[52px] font-semibold ml-4">
				<h1>
					The Next <br />
					<span className="text-gradient">Generation</span> <br />
					Payment Method.
				</h1>
			</div>
			<div className="text-gray-400 w-full m-8">
				<p>
					Our team of experts uses a methodology to identify the credit cards
					most likely to fit your needs. We examine annual percentage rates,
					annual fees.
				</p>
			</div>
		</div>
		<div className="w-2/4">
			<img
				src={robot}
				alt=""
			/>
		</div>
	</section>
);

export default Hero;
