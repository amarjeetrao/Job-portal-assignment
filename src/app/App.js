import {ThemeProvider} from '@material-ui/core';
import theme from './theme';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Listing from '../pages/Listing'
import Creation from '../pages/Creation'
import Details from '../pages/Details'

import './App.css';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<div className='App'>
						<Route
							exact
							path='/'
							component={props => <Listing {...props} />}
						/>
						<Route path='/create' component={props => <Creation {...props} />} />
						<Route path='/details/:id' component={props => <Details {...props} /> } />
					</div>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;
