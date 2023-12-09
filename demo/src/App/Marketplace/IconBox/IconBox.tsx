import { RedIcon } from 'redicons';



interface IconBoxProps {
	name: string,
	onClick: () => void
}

export default function IconBox ({
	name, onClick
}: IconBoxProps) {
	return (
		<div className='px-2 py-2 bg-zinc-950 text-center border-2 border-transparent cursor-pointer hover:border-red-500' onClick={onClick}>
			<header className='py-2'>
				<RedIcon name={name} size={32} className='mx-auto' fill='red' />
			</header>
			<footer>
				<h6 className='py-1'>
					<span className='px-1 py-1 rounded bg-zinc-900'>{name}</span>
				</h6>
			</footer>
		</div>
	);
}
