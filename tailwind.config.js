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
				'modal-base': '#17151e',
				'pill-grey': '#26242d',
			},

			linearBorderGradients: {
				directions: {
					// defaults to these values
					t: 'to top',
					tr: 'to top right',
					r: 'to right',
					br: 'to bottom right',
					b: 'to bottom',
					bl: 'to bottom left',
					l: 'to left',
					tl: 'to top left',
				},
				colors: {
					// defaults to {}
					red: '#f00',
					'red-blue': ['#f00', '#00f'],
					'blue-green': ['#0000ff', '#00FF00'],
					'red-green-blue': ['#f00', '#0f0', '#00f'],
					'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
					'indigo-purple-pink': ['#6366f1', '#a855f7', '#ec4899'],
				},
				background: {
					transparent: '#000000 0%',
					modal: '#17151e',
					'gray-50': '#F9FAFB',
					'gray-900': '#111827',
				},
				borders: {
					1: '1px',
					2: '2px',
					4: '4px',
				},
			},
		},
	},
	plugins: [require('tailwindcss-border-gradient-radius')],
};
