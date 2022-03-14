const autoLogin = 'loginAuto';

export const getAutoLoginLS = (): boolean => {
	const auto = localStorage.getItem(autoLogin);
	return auto && JSON.parse(auto);
};

export const setAutoLoginLS = (flag: boolean) => {
	localStorage.setItem(autoLogin, JSON.stringify(flag));
};
