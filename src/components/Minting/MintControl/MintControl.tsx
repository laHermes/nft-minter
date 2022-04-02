import { ReactNode } from 'react';

interface IChildren {
	children: ReactNode;
}

const MintControl = ({ children }: IChildren) => {
	return <div className='flex flex-row gap-2 text-xl'>{children}</div>;
};

export default MintControl;
