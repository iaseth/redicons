


interface CartProps {
	cartItems: string[]
}

export default function Cart ({
	cartItems
}: CartProps) {
	return (
		<section>
			<section className="max-w-5xl mx-auto">
				<header className="text-center px-3 py-6">
					<h2>Cart has {cartItems.length} items</h2>
				</header>
			</section>
		</section>
	);
}
