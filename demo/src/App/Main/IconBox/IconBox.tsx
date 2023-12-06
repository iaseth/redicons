import RedIcon from 'redicons';



interface IconBoxProps {
	name: string
}

export default function IconBox ({name}: IconBoxProps) {
	return (
		<div className='px-2 py-2 bg-white text-center'>
			<header className='py-2'>
				<RedIcon name={name} size={32} className='mx-auto' fill='red' />
			</header>
			<footer>
				<h6>
					<span className='px-1 py-1 rounded bg-zinc-100'>{name}</span>
				</h6>
			</footer>
		</div>
	);
}
