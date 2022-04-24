import React from 'react';
import meshLogo from '../../assets/mesh-second-logo.png';

const Logo: React.FC<React.HTMLAttributes<HTMLImageElement>> = ({
	...props
}) => {
	return (
		<img src={meshLogo} alt='mesh logo' className='h-12 inline' {...props} />
	);
};

export default Logo;
