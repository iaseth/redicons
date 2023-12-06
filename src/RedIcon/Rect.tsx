import { FC } from "react";
import { RectData } from "../data";



interface RectProps {
	data: RectData
}

const Rect: FC<RectProps> = ({data}) => {
	return (
		<rect width={data.width} height={data.height}
			x={data.x} y={data.y}
			rx={data.rx} ry={data.ry}
			transform={data.transform}
		/>
	);
};

export default Rect;
