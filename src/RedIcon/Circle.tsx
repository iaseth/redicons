import { CircleData } from "../data";



interface CircleProps {
	data: CircleData
}

export default function Circle ({data}: CircleProps) {
	return (
		<circle cx={data.cx} cy={data.cy} r={data.r} />
	);
}
