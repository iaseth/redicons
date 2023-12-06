import { FC } from "react";
import { CircleData } from "../data";



interface CircleProps {
	data: CircleData
}

const Circle: FC<CircleProps> = ({data}) => {
	return (
		<circle cx={data.cx} cy={data.cy} r={data.r} />
	);
};

export default Circle;
