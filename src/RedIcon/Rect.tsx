import { RectData } from "../data";



interface RectProps {
	data: RectData
}

export default function Rect ({data}: RectProps) {
	return (
		<rect width={data.width} height={data.height}
			x={data.x} y={data.y}
			rx={data.rx} ry={data.ry}
			transform={data.transform}
		/>
	);
}
