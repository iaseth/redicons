import { redicons } from 'redicons';
import IconBox from './IconBox/IconBox';
import React from 'react';



interface MarketplaceProps {
	//
}

export default function Marketplace ({}: MarketplaceProps) {
	const [query, setQuery] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	const filterWords = query.trim().split(" ").map(word => word.trim()).filter(word => word);
	const filteredIcons = redicons.filter(icon => {
		if (filterWords.length === 0) return true;
		for (const word of filterWords) {
			if (icon.name.includes(word)) return true;
		}
		return false;
	});

	const handleKeydown = (ev: KeyboardEvent) => {
		switch (ev.key) {
			case "/":
				if (inputRef && inputRef.current) {
					ev.preventDefault();
					inputRef.current.focus();
				}
				break;
			case "Escape":
				if (inputRef && inputRef.current && inputRef.current === document.activeElement) {
					ev.preventDefault();
					inputRef.current.blur();
				}
				break;
			default:
				console.log(`You pressed: '${ev.key}'`)
		}
	};
	React.useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.addEventListener('keydown', handleKeydown);
	}, []);

	return (
		<section className="px-2 py-4 bg-slate-200 min-h-screen">
			<section className='max-w-5xl mx-auto '>
				<header className='py-3'>
					<input className='px-3 py-3 w-full' value={query} ref={inputRef} onChange={e => setQuery(e.target.value)} />
				</header>

				<section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0.5">
					{filteredIcons.map((redicon, k) => <IconBox key={k} name={redicon.name} />)}
				</section>
			</section>
		</section>
	);
}
