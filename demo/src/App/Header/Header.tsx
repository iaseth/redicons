import React from "react";
import { TABS } from "../tabs";
import TabButton from "./TabButton";



interface HeaderProps {
	currentTabIndex: number,
	setCurrentTabIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function Header ({
	currentTabIndex, setCurrentTabIndex
}: HeaderProps) {
	return (
		<header className="bg-red-500 text-white text-center uppercase select-none">
			<section className="max-w-5xl mx-auto flex">
				{TABS.map((tab, k) => <TabButton key={k} data={tab}
					onClick={() => setCurrentTabIndex(k)}
					current={k === currentTabIndex}
				/>)}
			</section>
		</header>
	);
}
