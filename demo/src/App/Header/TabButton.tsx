import { TabData } from "../tabs";



interface TabButtonProps {
	data: TabData
}

export default function TabButton ({
	data
}: TabButtonProps) {
	return (
		<h4 className="basis-0 grow px-3 py-4 odd:bg-red-700">{data.name}</h4>
	);
}
