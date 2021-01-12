import {createMuiTheme} from '@material-ui/core';

export default createMuiTheme({
	typography: {
		fontFamily: 'Spartan, sans-serif;',
		fontSize: 15,
		h1: {
			fontWeight: 700
		},
		h2: {
			fontWeight: 700
		},
		h3: {
			fontWeight: 700
		},
		h4: {
			fontWeight: 700
		},
		h5: {
			fontWeight: 700
		},
		h6: {
			fontWeight: 700
		}
	},
	palette: {
		background: {
			default: '#EFFAFA'
		},

		primary: {
			main: '#5BA4A4',
			light: '#7bb6b6',
			dark: '#2C3A3A'
		},
		secondary: {
			light: '#fff',
			main: '#EEF6F6',
			dark: '#7B8E8E'
		}
	},

	overrides: {
		MuiInput: {
			underline: {
				'&:before': {
					borderBottom: '1px solid #b9b9b9'
				}
			}
		},
		MuiInputLabel: {
			root: {
				color: '#b9b9b9',
				lineHeight: '0'
			}
		},
		MuiGrid: {
			item: {
				width: '100%'
			}
		},
		MuiCard: {
			root: {
				backgroundColor: 'white',
				overflow: 'visible',
				boxShadow: '9px 15px 18px 0px rgb(99 186 186 / 25%)'
			}
		},
		MuiPaper: {
			root: {
				backgroundColor: '#EEF6F6'
			}
		},
		MuiButton: {
			containedPrimary: {
				color: 'white',
				fontWeight: '500',
				boxShadow: 'none',
				'&:hover': {
					backgroundColor: '#7bb6b6',
					boxShadow: '9px 15px 18px 0px rgb(99 186 186 / 25%)'
				}
			},
			root: {
				padding: '16px',
				lineHeight: '1.4'
			}
		}
	}
});
