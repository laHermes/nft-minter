import React from 'react';

import Status from '../../../components/Elements/Status/Status';

const StatusSubmitted = ({ ...props }) => <Status variant='blue' {...props} />;
const StatusLoading = ({ ...props }) => <Status variant='blue' {...props} />;
const StatusError = ({ ...props }) => <Status variant='red' {...props} />;
const StatusSuccess = ({ ...props }) => <Status variant='green' {...props} />;

export { StatusSubmitted, StatusLoading, StatusError, StatusSuccess };
