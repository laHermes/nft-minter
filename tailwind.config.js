module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		// borderRadius: {
		// 	large: '12px',
		// },
		fontSize: {
			xxs: '.5rem',
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		extend: {
			colors: {
				'blue-theme': '#010e1b',
				'blue-nft-theme': '#03091f',
				'blue-background': '#07050f',
				'default-primary': '#322d47',
				'hover-primary': '#463f63',
				'modal-base': '#0a090e',
			},
		},
	},
	plugins: [],
};
