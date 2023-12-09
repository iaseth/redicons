import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Marketplace from './Marketplace/Marketplace';
import { TABS } from './tabs';
import Cart from './Cart/Cart';
import { red } from 'redicons';
import SplashScreen from './SplashScreen/SplashScreen';



export default function App () {
	const [iconsLoaded, setIconsLoaded] = React.useState(false);

	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	const currentTab = TABS[currentTabIndex];

	const [cartItems, setCartItems] = React.useState<string[]>([]);
	const addItemToCard = (itemName: string) => {
		setCartItems(items => [...items, itemName]);
	};

	React.useEffect(() => {
		fetch("redicons.json").then(data => data.json()).then(jo => {
			const icons = jo.icons;
			red.addIcons(icons);
			setIconsLoaded(true);
		});
	}, []);

	const getContent = () => {
		switch (currentTab.name) {
			case "Cart":
				return <Cart {...{cartItems}} />;
			case "Market":
			default:
				return <Marketplace {...{addItemToCard}} />;
		}
	};

	if (!iconsLoaded) {
		return <SplashScreen />;
	}

	return (
		<div className="bg-zinc-900 text-white mono">
			<Header {...{currentTabIndex, setCurrentTabIndex}} />
			<main className='min-h-screen'>
				{getContent()}
			</main>
			<Footer />
		</div>
	);
}
