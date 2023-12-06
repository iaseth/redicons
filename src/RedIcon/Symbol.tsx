import { FC } from "react";
import { SymbolData } from "../data";



interface SymbolProps {
	data: SymbolData
}

const Symbol: FC<SymbolProps> = ({data}) => {
	return (
		<symbol id={data.id} className={data.className} viewBox={data.viewbox} />
	);
};

export default Symbol;
