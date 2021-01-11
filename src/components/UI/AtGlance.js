import React from 'react'

import {Paper, Box, Typography} from '@material-ui/core';

function AtGlance({label, title}) {
	return (
		<Paper elevation={0}>
			<Box p={3}>
				<Typography
					variant='caption'
					style={{
						fontWeight: '500',
						color: '#969696'
					}}>
					{label}
				</Typography>
				<Typography variant='subtitle1' style={{marginTop: '0.8rem'}}>
					{title}
				</Typography>
			</Box>
		</Paper>
	);
}

export default AtGlance
