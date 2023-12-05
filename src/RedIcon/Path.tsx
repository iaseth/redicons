import { PathData } from "../data";



interface PathProps {
	data: PathData
}

export default function Path ({data}: PathProps) {
	return (
		<path d={data.d} fillRule={data.fillRule || "nonzero"} fillOpacity={data.fillOpacity || 1} />
	);
}
