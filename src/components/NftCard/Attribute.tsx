import React from 'react';

interface IAttribute {
	attribute: string | number;
	value: string | number;
}

const Attribute = ({ attribute, value }: IAttribute) => {
	return (
		<div>
			<p className='text-sm text-indigo-50 font-medium tracking-wider '>
				{attribute} : {value}
			</p>
		</div>
	);
};

export default Attribute;
