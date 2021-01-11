import React from 'react'
import {FormControl, InputLabel, FormHelperText, Select} from '@material-ui/core';

function ReduxFormSelect({
	input,
	label,
	meta: {touched, error},
	children,
	...custom
}) {
	return (
		<FormControl fullWidth error={touched && error}>
			<InputLabel id={label}>{label}</InputLabel>
			<Select
				labelId={label}
				onChange={(event, index, value) => input.onChange(value)}
				{...input}
				{...custom}
				children={children}
				fullWidth
			/>
			<FormHelperText>{touched && error && 'This Field is Required'}</FormHelperText>
		</FormControl>
	);
}

export default ReduxFormSelect