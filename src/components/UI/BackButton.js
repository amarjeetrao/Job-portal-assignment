import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {useHistory} from 'react-router-dom'

function BackButton() {

	const history = useHistory();

	return (
		<IconButton style={{ color: 'black', backgroundColor:'white' }} onClick={() => history.goBack()}>
			<ArrowBackIcon />
		</IconButton>
	);
}

export default BackButton
