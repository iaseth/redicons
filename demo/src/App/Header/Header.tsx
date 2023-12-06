import { TABS } from "../tabs";
import TabButton from "./TabButton";



interface HeaderProps {
	//
}

export default function Header ({}: HeaderProps) {
	return (
		<header className="bg-red-500 text-white text-center">
			<section className="max-w-5xl mx-auto flex">
				{TABS.map((tab, k) => <TabButton key={k} data={tab} />)}
			</section>
		</header>
	);
}
