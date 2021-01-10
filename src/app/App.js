import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import {BrowserRouter as Router, Switch} from 'react-router-dom';

import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<div className='App'>

					</div>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
