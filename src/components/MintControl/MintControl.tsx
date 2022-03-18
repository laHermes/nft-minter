import { ReactNode } from 'react';

interface IChildren {
	children: ReactNode;
}

const MintControl = ({ children }: IChildren) => {
	return (
		<div className='flex flex-row gap-2 content-center justify-between text-indigo-50'>
			{children}
		</div>
	);
};

export default MintControl;
