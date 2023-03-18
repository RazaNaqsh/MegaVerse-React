import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
	return (
		<nav className="relative flex justify-between items-center  h-24">
			<div className="absolute " />
			<img
				src={search}
				alt="search"
				className="h-[24px] w-[24px] object-contain"
			/>
			<h2 className="text-white text-2xl font-medium">METAVERSUS</h2>
			<img
				src={menu}
				alt="menu"
				className="h-[24px] w-[24px] object-contain"
			/>
		</nav>
	);
};

export default Navbar;
