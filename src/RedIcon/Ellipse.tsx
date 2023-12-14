import { FC } from "react";
import { EllipseData } from "../data";



interface EllipseProps {
	data: EllipseData
}

const Ellipse: FC<EllipseProps> = ({data}) => {
	return (
		<ellipse cx={data.cx} cy={data.cy} rx={data.rx} ry={data.ry} />
	);
};

export default Ellipse;
