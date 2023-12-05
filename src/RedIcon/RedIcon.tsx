import { icons } from "../data";
import Path from "./Path";
import Rect from "./Rect";



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
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={style}>
			{icon.paths.map(path => <Path data={path} />)}
			{icon.rects.map(rect => <Rect data={rect} />)}
		</svg>
	);
}
