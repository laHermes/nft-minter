import { ExclamationCircleIcon } from '@heroicons/react/outline';
import React from 'react';

import Status from '../../../components/Elements/Status/Status';

const StatusSubmitted = ({ ...props }) => (
	<Status variant='blue' isLoading {...props} />
);
const StatusError = ({ ...props }) => (
	<Status
		variant='red'
		{...props}
		icon={<ExclamationCircleIcon className='h-6' />}
	/>
);
const StatusSuccess = ({ ...props }) => (
	<Status
		variant='green'
		{...props}
		icon={<ExclamationCircleIcon className='h-6' />}
	/>
);

export { StatusSubmitted, StatusError, StatusSuccess };
