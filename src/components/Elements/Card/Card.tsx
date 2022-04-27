import React from 'react';

type DivProps = React.FC<React.HTMLAttributes<HTMLDivElement>>;

const Card: DivProps = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

export default Card;
