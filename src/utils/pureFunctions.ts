export const shortenString = (
	string: string,
	separator = '...',
	toLength = 13
): string => {
	const startEndLength = Math.floor((toLength - separator.length) / 2);
	const start = string.substring(0, startEndLength);
	const end = string.substring(string.length - startEndLength, string.length);
	return start + separator + end;
};
