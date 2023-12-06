import { TabData } from "../tabs";



interface TabButtonProps {
	data: TabData,
	onClick: () => void,
	current: boolean
}

export default function TabButton ({
	data, onClick, current
}: TabButtonProps) {
	return (
		<h4 className={`basis-0 grow px-3 py-5 ${current ? "bg-zinc-200 text-red-800" : "bg-red-500 odd:bg-red-600 cursor-pointer"}`} onClick={onClick}>
			<span>{data.name}</span>
		</h4>
	);
}
