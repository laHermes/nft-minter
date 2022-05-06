import { ExclamationCircleIcon } from '@heroicons/react/outline';
import React from 'react';

import Status from './Status';
const classNm = 'h-6';

const StatusSubmitted = ({ ...props }) => (
	<Status
		variant='blue'
		icon={<ExclamationCircleIcon className={classNm} />}
		{...props}
	/>
);

const StatusLoading = ({ ...props }) => (
	<Status
		variant='blue'
		{...props}
		icon={<ExclamationCircleIcon className={classNm} />}
	/>
);
const StatusError = ({ ...props }) => (
	<Status
		variant='red'
		{...props}
		icon={<ExclamationCircleIcon className={classNm} />}
	/>
);
const StatusSuccess = ({ ...props }) => (
	<Status
		variant='green'
		{...props}
		icon={<ExclamationCircleIcon className={classNm} />}
	/>
);

export { StatusSubmitted, StatusLoading, StatusError, StatusSuccess };
