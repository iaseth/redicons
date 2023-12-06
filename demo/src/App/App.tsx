import React from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Marketplace from './Marketplace/Marketplace';
import { TABS } from './tabs';
import Cart from './Cart/Cart';



export default function App () {
	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);
	const currentTab = TABS[currentTabIndex];

	const getContent = () => {
		switch (currentTab.name) {
			case "Cart":
				return <Cart />;
			case "Market":
			default:
				return <Marketplace />;
		}
	};

	return (
		<div className="">
			<Header {...{currentTabIndex, setCurrentTabIndex}} />
			<main className='min-h-screen'>
				{getContent()}
			</main>
			<Footer />
		</div>
	);
}
