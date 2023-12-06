import { FC } from "react";
import { PathData } from "../data";



interface PathProps {
	data: PathData
}

const Path: FC<PathProps> = ({data}) => {
	const fillRule = data.fillRule === "evenodd" ? "evenodd" : "nonzero";
	return (
		<path d={data.d} fillRule={fillRule} fillOpacity={data.fillOpacity || 1} />
	);
};

export default Path;
