import React, {Component} from 'react';

import {Container} from '@material-ui/core';

import Header from '../components/UI/Header';
import CreateForm from '../components/UI/CreateForm';

class Creation extends Component {

	submit = values => {
		// print the form values to the console
		alert(values);
	};

	render() {
		return (
			<Container maxWidth='md'>
				<Header title='Job Creation' />
				<CreateForm />
			</Container>
		);
	}
}

export default Creation;
