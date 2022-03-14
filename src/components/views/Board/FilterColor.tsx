import React, { useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import { selectUniqueColors } from '../../../redux/nfts/nfts';
import { useSelector } from 'react-redux';
import { Group } from '../../../hooks/useFilter';
import { INft } from '../../../redux/types';

const FilterColor = ({ toggleFilter }: any) => {
	const [selectedColor, setSelectedColor] = useState<string>();
	// const [loaded, setLoaded] = useState<boolean>(false);

	const colors = useSelector(selectUniqueColors);

	useEffect(() => {
		setSelectedColor(colors[0]);
	}, [colors]);

	return (
		<Listbox
			value={selectedColor}
			onChange={(color: string) => {
				setSelectedColor(color);
				toggleFilter(
					color,
					Group.COLOR,
					(nft: INft) => nft.metadata.attributes[0].value === color
				);
			}}>
			<Listbox.Button className='absolute bg-white w-24 px-2 rounded-lg'>
				{selectedColor}
			</Listbox.Button>
			<Listbox.Options className='absolute bg-white w-24 px-2 rounded-lg'>
				{colors.map((color) => (
					<Listbox.Option key={color} value={color}>
						{color}
					</Listbox.Option>
				))}
			</Listbox.Options>
		</Listbox>
	);
};

export default FilterColor;
