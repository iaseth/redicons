import redIconsJson from './redicons.json';



interface PathData {
	d: string,
	fillRule?: string,
	fillOpacity?: string
}

interface SymbolData {
	id: string,
	className?: string,
	viewbox: string
}

interface CircleData {
	cx: string,
	cy: string,
	r: string
}

interface RectData {
	width: string,
	height: string,
	x?: string,
	y?: string,
	rx?: string,
	ry?: string,
	transform?: string
}

interface RedIconData {
	name: string,
	paths: PathData[],
	symbols: SymbolData[],
	circles: CircleData[],
	rects: RectData[]
}

const icons: RedIconData[] = redIconsJson.icons;