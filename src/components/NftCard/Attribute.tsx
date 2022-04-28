import React from 'react';

interface IAttribute {
	attribute: string | number;
	value: string | number;
	separationSign?: string | number;
}

const Attribute = ({ attribute, value, separationSign = ':' }: IAttribute) => {
	return (
		<div>
			<p className='text-sm text-indigo-50 font-medium tracking-wider'>
				{attribute}
				{separationSign} {value}
			</p>
		</div>
	);
};

export default Attribute;
