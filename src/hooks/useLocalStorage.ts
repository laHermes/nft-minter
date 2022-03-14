import React from 'react';

enum LocalStorageObjects {
	AUTO_LOGIN = 'autoLogin',
}

const useLocalStorage = ({
	serialize = JSON.stringify,
	deserialize = JSON.parse,
} = {}) => {
	const getLocalStorage = (key: LocalStorageObjects) => {
		const storage = window.localStorage.getItem(key);
		return storage && deserialize(storage);
	};

	const setLocalStorage = (key: LocalStorageObjects, value: string) => {
		window.localStorage.setItem(key, serialize(value));
	};

	return { getLocalStorage, setLocalStorage };
};

export default useLocalStorage;
