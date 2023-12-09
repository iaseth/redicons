import { RedIconData, redicons } from "./data";



function addIconData (icon: RedIconData) {
	redicons.push(icon);
}

function addIconsData (icons: RedIconData[]) {
	redicons.push(...icons);
}

export const red = {
	icons: redicons,
	addIcon: addIconData,
	addIcons: addIconsData
};
