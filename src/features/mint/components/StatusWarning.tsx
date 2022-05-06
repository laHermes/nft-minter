import { ExclamationCircleIcon } from '@heroicons/react/outline';
import React from 'react';

enum STATES {
	IDLE = 'IDLE',
	SUBMITTED = 'SUBMITTED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: STATES;
	msg?: any;
}

const StatusWarning = ({ msg }: IStatus) => {
	return (
		<div className='inline-flex gap-2 my-2 py-2 px-3 bg-red-900/40 text-red-600 rounded-[12px] '>
			<ExclamationCircleIcon className='h-6' />
			<span>{msg}</span>
		</div>
	);
};

export default StatusWarning;
