import { FC } from "react";
import { CircleData } from "../data";



interface CircleProps {
	data: CircleData
}

const Circle: FC<CircleProps> = ({data}) => {
	const fillRule = data.fillRule === "evenodd" ? "evenodd" : "nonzero";
	return (
		<circle cx={data.cx} cy={data.cy} r={data.r}
			fillRule={fillRule}
			opacity={data.opacity || 1} />
	);
};

export default Circle;
