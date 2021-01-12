import React from 'react';
import {
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox
} from '@material-ui/core';

function ReduxFormCheckbox({input, label}) {
	return (
		<FormControl component='fieldset'>
			<FormGroup aria-label='position' row>
				<FormControlLabel
					style={{marginlLeft: '0'}}
					value={label}
					checked={input.value ? true : false}
					control={
						<Checkbox color='primary' onClick={input.onChange} />
					}
					label={label}
					labelPlacement='start'
				/>
			</FormGroup>
		</FormControl>
	);
}

export default ReduxFormCheckbox;
