import { FC } from "react";
import { CircleData, PathData, RectData, SymbolData, redicons } from "../data";
import Circle from "./Circle";
import Path from "./Path";
import Rect from "./Rect";
import Symbol from "./Symbol";



interface RedIconProps {
	name: string,
	size?: number,
	className?: string,
	fill?: string
}

const RedIcon: FC<RedIconProps> =  ({
	name,
	size=16,
	className="",
	fill="currentColor"
}) => {
	const icon = redicons.find(icon => icon.name === name);
	if (!icon) {
		return null;
	}

	const style = {
		height: `${size}px`,
		width: `${size}px`
	};

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={fill} viewBox="0 0 16 16" className={className} style={style}>
			{icon.paths && icon.paths.map((path: PathData, k) => <Path key={k} data={path} />)}
			{icon.symbols && icon.symbols.map((symbol: SymbolData, k) => <Symbol key={k} data={symbol} />)}
			{icon.circles && icon.circles.map((circle: CircleData, k) => <Circle key={k} data={circle} />)}
			{icon.rects && icon.rects.map((rect: RectData, k) => <Rect key={k} data={rect} />)}
		</svg>
	);
};

export default RedIcon;
