import RedIcon from 'redicons';



interface MainProps {
	//
}

export default function Main ({}: MainProps) {
	return (
		<main className="px-2 py-4 bg-slate-200 min-h-screen">
			<section className="max-w-5xl mx-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
				<RedIcon name="0-square-fill" size={32} />
			</section>
		</main>
	);
}
