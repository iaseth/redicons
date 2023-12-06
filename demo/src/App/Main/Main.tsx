import { redicons } from 'redicons';
import IconBox from './IconBox/IconBox';



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	return (
		<main className="px-2 py-4 bg-slate-200 min-h-screen">
			<section className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-0.5">
				{redicons.map((redicon, k) => <IconBox key={k} name={redicon.name} />)}
			</section>
		</main>
	);
}
