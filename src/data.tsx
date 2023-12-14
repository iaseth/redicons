


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
	r: string,
	fillRule?: string
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

export interface RedIconData {
	name: string,
	paths?: PathData[],
	symbols?: SymbolData[],
	circles?: CircleData[],
	rects?: RectData[]
}

export const redicons: RedIconData[] = [];