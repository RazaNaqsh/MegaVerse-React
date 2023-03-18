import cover from "../assets/cover.png";
const Hero = () => {
	return (
		<section className="pt-24">
			<h1 className="text-white text-[144px] leading-[120px] font-bold text-center">
				METAVERSE
			</h1>
			<div className="flex justify-center items-center">
				<h1 className="text-white text-[144px] leading-[158px] font-bold text-center">
					MA
				</h1>
				<div className="h-[100px] w-[190px] border-l-[15px] border-t-[17px] border-b-[17px] border-r-[15px] rounded-r-full mb-1"></div>
				<h1 className="text-white text-[144px] leading-[158px] font-bold text-center">
					NESS
				</h1>
			</div>
			<img
				src={cover}
				alt=""
				className="w-full m-auto h-[478px] object-cover rounded-tl-[150px] rounded-tr-none"
			/>
		</section>
	);
};

export default Hero;
