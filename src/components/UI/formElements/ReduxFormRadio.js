import React from 'react'
import RadioButtonGroup from '@material-ui/core/RadioButtonGroup'

function ReduxFormRadio({input, ...rest}) {
	return (
		<RadioButtonGroup
			{...input}
			{...rest}
			valueSelected={input.value}
			onChange={(event, value) => input.onChange(value)}
		/>
	);
}

export default ReduxFormRadio