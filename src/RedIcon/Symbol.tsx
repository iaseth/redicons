import { SymbolData } from "../data";



interface SymbolProps {
	data: SymbolData
}

export default function Symbol ({data}: SymbolProps) {
	return (
		<symbol id={data.id} className={data.className} viewbox={data.viewbox} />
	);
}
