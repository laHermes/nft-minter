import React from 'react';
import { Listbox } from '@headlessui/react';

import useColorFilter from 'hooks/useColorFilter';
import { IFilterColor } from 'types';

const FilterColor = ({
	toggleGroupFilter,
	removeAllGroupFilters,
	filters,
}: IFilterColor) => {
	const { colors, selectedColor, changeColor } = useColorFilter({
		toggleGroupFilter,
		removeAllGroupFilters,
		filters,
	});

	return (
		<Listbox value={selectedColor} onChange={changeColor}>
			<Listbox.Button className='bg-white w-24 px-2 rounded-lg'>
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
