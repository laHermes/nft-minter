enum states {
	IDLE = 'IDLE',
	SUBMITTED = 'SUBMITTED',
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	SUCCESS = 'SUCCESS',
}

interface IStatus {
	status: states;
	msg?: any;
}

export { states, IStatus };
