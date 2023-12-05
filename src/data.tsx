import redIconsJson from './redicons.json';



export interface PathData {
	d: string,
	fillRule?: string,
	fillOpacity?: string
}

export interface SymbolData {
	id: string,
	className?: string,
	viewbox: string
}

export interface CircleData {
	cx: string,
	cy: string,
	r: string
}

export interface RectData {
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
	className: string,
	paths: PathData[],
	symbols: SymbolData[],
	circles: CircleData[],
	rects: RectData[]
}

const icons: RedIconData[] = redIconsJson.icons;