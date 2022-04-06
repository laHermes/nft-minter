import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectUniqueColors } from '../redux/nfts/nfts';
import { INft } from '../redux/types';
import { IFilterColor } from '../types';
import { Group } from './useFilter';

const defaultString = 'No Color';

const useColorFilter = ({
	toggleGroupFilter,
	removeAllGroupFilters,
	filters,
}: IFilterColor) => {
	const [selectedColor, setSelectedColor] = useState<string>(defaultString);
	const selectColors = useSelector(selectUniqueColors);

	const colors = useMemo(
		() => [defaultString, ...selectColors],
		[selectColors]
	);

	const changeColor = (color: string) => {
		setSelectedColor(color);
		if (color === defaultString) {
			removeAllGroupFilters(Group.COLOR);
			return;
		}
		toggleGroupFilter(
			color,
			Group.COLOR,
			(nft: INft) => nft.metadata.attributes[0].value === color
		);
	};

	return { colors, selectedColor, changeColor };
};

export default useColorFilter;