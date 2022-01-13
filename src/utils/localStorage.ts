const autoLogin = 'loginAuto';
const darkMode = 'darkMode';

export const getAutoLoginLS = (): boolean => {
	const auto = localStorage.getItem(autoLogin);
	return auto && JSON.parse(auto);
};

export const setAutoLoginLS = (flag: boolean) => {
	localStorage.setItem(autoLogin, JSON.stringify(flag));
};

export const setDarkModeLS = (flag: boolean) => {
	localStorage.setItem(darkMode, JSON.stringify(flag));
};
