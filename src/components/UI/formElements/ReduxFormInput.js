import React from 'react'
import TextField from '@material-ui/core/TextField'

function ReduxFormInput({input, label, meta: {touched, error}, ...custom}) {
	return (
		<TextField
			label={label}
			error={touched && error}
			helperText={touched && error && 'This Field is Required'}
			{...input}
			{...custom}
			fullWidth
		/>
	);
}

export default ReduxFormInput
