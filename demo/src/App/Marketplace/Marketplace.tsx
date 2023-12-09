import IconBox from './IconBox/IconBox';
import React from 'react';
import iconNamesJson from '../iconnames.json';



interface MarketplaceProps {
	addItemToCard: (itemName: string) => void
}

export default function Marketplace ({
	addItemToCard
}: MarketplaceProps) {
	const [query, setQuery] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);

	const iconNames = iconNamesJson.iconNames;
	const filterWords = query.trim().split(" ").map(word => word.trim()).filter(word => word);
	const filteredIconNames = iconNames.filter(iconName => {
		if (filterWords.length === 0) return true;
		for (const word of filterWords) {
			if (iconName.includes(word)) return true;
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
		<section className="px-2 py-4 min-h-screen">
			<section className='max-w-5xl mx-auto '>
				<header className='py-3'>
					<input className='px-3 py-3 w-full bg-zinc-950' value={query} ref={inputRef} onChange={e => setQuery(e.target.value)} />
				</header>

				<section className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0.5 select-none">
					{filteredIconNames.map((iconName, k) => <IconBox key={k} name={iconName} onClick={() => addItemToCard(iconName)} />)}
				</section>
			</section>
		</section>
	);
}
