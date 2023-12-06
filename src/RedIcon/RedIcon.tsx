import { CircleData, PathData, RectData, SymbolData, icons } from "../data";
import Circle from "./Circle";
import Path from "./Path";
import Rect from "./Rect";
import Symbol from "./Symbol";



interface RedIconProps {
	name: string,
	size?: number,
}

export default function RedIcon ({
	name,
	size=16
}: RedIconProps) {
	const icon = icons.find(icon => icon.name === name);
	if (!icon) {
		return null;
	}

	const style = {
		height: `${size}px`,
		width: `${size}px`
	};

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={icon.className} style={style}>
			{icon.paths.map((path: PathData) => <Path data={path} />)}
			{icon.symbols.map((symbol: SymbolData) => <Symbol data={symbol} />)}
			{icon.circles.map((circle: CircleData) => <Circle data={circle} />)}
			{icon.rects.map((rect: RectData) => <Rect data={rect} />)}
		</svg>
	);
}
