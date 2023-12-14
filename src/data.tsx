


export interface PathData {
	d: string,
	fillRule?: string,
	fillOpacity?: string,
	opacity?: string
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
	fillRule?: string,
	opacity?: string
}

export interface EllipseData {
	cx: string,
	cy: string,
	rx: string,
	ry: string,
	opacity?: string
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
	ellipses?: EllipseData[],
	rects?: RectData[]
}

export const redicons: RedIconData[] = [];